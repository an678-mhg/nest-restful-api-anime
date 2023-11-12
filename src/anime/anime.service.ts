import { Injectable } from '@nestjs/common';
import { AnimeCrawlDetail } from 'src/contanst';
import { PrismaService } from 'src/prisma/prisma.service';
import { SearchAnimeDto } from './dto';
import { Animes, Prisma } from '@prisma/client';

@Injectable()
export class AnimeService {
  constructor(private prisma: PrismaService) {}

  async createAnime(anime: AnimeCrawlDetail) {
    const {
      actors,
      categories,
      countries,
      director,
      image_url,
      episodes_link_iframe,
      episodes_link_m3u8,
      language,
      other_title,
      quality,
      time,
      title,
      year,
      slug,
      description,
    } = anime;

    const exist_anime = await this?.prisma?.animes?.findFirst({
      where: {
        title,
        other_title,
        slug,
      },
    });

    if (exist_anime?.id) {
      return true;
    }

    const [_, __] = await Promise.all([
      countries &&
        this.prisma?.countries?.createMany({
          data: [
            ...countries
              ?.split(',')
              ?.filter((item) => item?.trim())
              ?.map((item) => ({ name: item?.trim() })),
          ],
          skipDuplicates: true,
        }),
      categories &&
        this.prisma?.categories?.createMany({
          data: [
            ...categories
              ?.split(',')
              ?.filter((item) => item?.trim())
              ?.map((item) => ({ name: item?.trim() })),
          ],
          skipDuplicates: true,
        }),
    ]);

    const [categories_id_list, countries_id_list] = await Promise.all([
      Promise.all(
        categories
          ?.split(',')
          ?.filter((item) => item?.trim())
          ?.map(async (item) => {
            const exits = await this?.prisma?.categories?.findFirst({
              where: {
                name: item?.trim(),
              },
            });

            return {
              categoryId: exits?.id,
            };
          }),
      ),
      Promise.all(
        countries
          ?.split(',')
          ?.filter((item) => item?.trim())
          ?.map(async (item) => {
            const exits = await this?.prisma?.countries?.findFirst({
              where: {
                name: item?.trim(),
              },
            });

            return {
              countryId: exits?.id,
            };
          }),
      ),
    ]);

    const new_anime = await this.prisma?.animes?.create({
      data: {
        image_url,
        other_title: other_title || title,
        slug,
        title,
        actors,
        countries: {
          createMany: {
            data: countries_id_list?.filter((item) => item?.countryId),
          },
        },
        description,
        director,
        language,
        quality,
        time,
        year,
        episodes: {
          createMany: {
            data: [
              ...episodes_link_iframe?.map((item) => ({
                name: item.name,
                type: 'iframe',
                url: item?.url,
              })),
              ...episodes_link_m3u8?.map((item) => ({
                name: item.name,
                type: 'm3u8',
                url: item?.url,
              })),
            ],
          },
        },
        categories: {
          createMany: {
            data: categories_id_list?.filter((item) => item?.categoryId),
          },
        },
      },
    });

    return new_anime;
  }

  async filterAnime(
    category_id: number,
    country_id: number,
    year: string,
    limit: number,
    skip: number,
    page: number,
  ) {
    const filter = {};

    if (category_id) {
      // @ts-ignore
      filter.categories = {
        some: {
          categoryId: category_id,
        },
      };
    }

    if (country_id) {
      // @ts-ignore
      filter.countries = {
        some: {
          countryId: country_id,
        },
      };
    }

    if (year) {
      // @ts-ignore
      filter.year = year;
    }

    const animes = await this.prisma?.animes?.findMany({
      where: {
        ...filter,
      },
      select: {
        id: true,
        image_url: true,
        slug: true,
        title: true,
        other_title: true,
        description: true,
        year: true,
      },
      take: limit <= 20 ? limit : 20,
      skip,
    });

    return {
      data: animes,
      pagination: {
        page_current: page,
        has_next_page: animes?.length >= limit ? true : false,
      },
    };
  }

  async getAnimeUpdated() {
    const animes = await this.prisma?.animes?.findMany({
      orderBy: {
        updated_at: 'desc',
      },
      take: 20,
      skip: 0,
      select: {
        id: true,
        image_url: true,
        slug: true,
        title: true,
        other_title: true,
        description: true,
        year: true,
      },
    });

    return {
      data: animes,
    };
  }

  async getAnimeBySlug(slug: string) {
    const anime = await this.prisma?.animes?.findFirst({
      where: {
        slug,
      },
      include: {
        categories: {
          include: {
            category: {
              select: {
                name: true,
              },
            },
          },
        },
        countries: {
          include: {
            country: {
              select: {
                name: true,
              },
            },
          },
        },
      },
    });

    const [episodes_m3u8_url, episodes_iframe_url] = await Promise.all([
      this.prisma?.episodes?.findMany({
        where: {
          animeId: anime?.id,
          type: 'm3u8',
        },
        select: {
          id: true,
          name: true,
          url: true,
          type: true,
        },
      }),
      this.prisma?.episodes?.findMany({
        where: {
          animeId: anime?.id,
          type: 'iframe',
        },
        select: {
          id: true,
          name: true,
          url: true,
          type: true,
        },
      }),
    ]);

    return {
      data: {
        info: anime,
        episodes_m3u8_url,
        episodes_iframe_url,
      },
    };
  }

  async searchAnime(body: SearchAnimeDto) {
    const q = body?.q?.replace(/\s+/g, ' & ')?.toLocaleLowerCase();

    const limit = Number(body?.limit) || 20;
    const page = Number(body?.page) || 1;
    const skip = (page - 1) * limit;

    const animes = (await this.prisma?.$queryRaw(
      Prisma.sql`
        SELECT * 
        FROM animes 
        WHERE to_tsvector('english', lower(title) || ' ' || lower(other_title) || ' ' || lower(description)) @@ to_tsquery('english', ${q})
        ORDER BY updated_at DESC
        LIMIT ${limit}
        OFFSET ${skip};
      `,
    )) as Animes[];

    return {
      data: animes,
      pagination: {
        page_current: page,
        has_next_page: animes?.length >= limit ? true : false,
      },
    };
  }

  async getMetadata() {
    const [categories, countries] = await Promise.all([
      this.prisma?.categories?.findMany({
        select: {
          name: true,
          id: true,
        },
      }),
      this.prisma?.countries?.findMany({
        select: {
          id: true,
          name: true,
        },
      }),
    ]);

    return {
      data: {
        categories,
        countries,
      },
    };
  }
}
