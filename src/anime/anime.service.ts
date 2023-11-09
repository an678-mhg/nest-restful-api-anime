import { Injectable } from '@nestjs/common';
import { AnimeCrawlDetail } from 'src/contanst';
import { PrismaService } from 'src/prisma/prisma.service';
import { SearchAnimeDto } from './dto';

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
      },
    });

    if (exist_anime?.id) {
      return true;
    }

    const [exist_countries, _, categories_id_list] = await Promise.all([
      (async () => {
        const data = await this.prisma?.countries?.findFirst({
          where: {
            name: countries?.trim(),
          },
        });

        if (data?.id) {
          return data;
        }

        const new_data = await this?.prisma?.countries?.create({
          data: {
            name: countries?.trim(),
          },
        });

        return new_data;
      })(),
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
    ]);

    const new_anime = await this.prisma?.animes?.create({
      data: {
        image_url,
        other_title,
        slug,
        title,
        actors,
        countries: {
          create: {
            countryId: exist_countries?.id,
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
    const animes = await this.prisma?.animes?.findMany({
      where: {
        categories: {
          some: {
            categoryId: category_id,
          },
        },
        countries: {
          some: {
            countryId: country_id,
          },
        },
        year,
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
    const q = body?.q;

    const limit = Number(body?.limit) || 20;
    const page = Number(body?.page) || 1;
    const skip = (page - 1) * limit;

    const animes = await this.prisma?.animes?.findMany({
      where: {
        title: {
          search: q,
        },
        other_title: {
          search: q,
        },
        description: {
          search: q,
        },
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
}
