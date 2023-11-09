import { Controller, Get, Post, Query } from '@nestjs/common';
import { CrawlService } from './crawl.service';
import { AnimeService } from 'src/anime/anime.service';

@Controller('crawl')
export class CrawlController {
  constructor(
    private crawlService: CrawlService,
    private animeService: AnimeService,
  ) {}

  @Post('insert/animes')
  async insertAnimeToDatabase(@Query() query: { page: number }) {
    const page = query?.page || 1;
    const anime_list = await this.crawlService?.crawlAnime(page);

    const response = await Promise.allSettled(
      anime_list?.map(async (item) => {
        const anime_data = await this.crawlService?.crawlAnimeDetail(
          item?.slug,
        );

        return this.animeService?.createAnime(anime_data);
      }),
    );

    return response;
  }

  @Get('metadata')
  crawlMetadata() {
    return this.crawlService?.crawlMetadata();
  }
}
