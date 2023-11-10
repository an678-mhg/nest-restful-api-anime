import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { AnimeService } from './anime.service';
import { FilterAnimeDto, GetAnimeBySlugDto, SearchAnimeDto } from './dto';

@Controller('anime')
export class AnimeController {
  constructor(private animeService: AnimeService) {}

  @Get('updated_at')
  getAnimeUpdated() {
    return this.animeService?.getAnimeUpdated();
  }

  @Get('detail/:slug')
  getAnimeBySlug(@Param() param: GetAnimeBySlugDto) {
    return this?.animeService?.getAnimeBySlug(param?.slug);
  }

  @Post('filter')
  filterAnime(@Body() body: FilterAnimeDto) {
    const category_id = Number(body?.category_id);
    const country_id = Number(body?.country_id);
    const year = body?.year;

    const limit = Number(body?.limit) || 20;
    const page = Number(body?.page) || 1;
    const skip = (page - 1) * limit;

    return this.animeService?.filterAnime(
      category_id,
      country_id,
      year,
      limit,
      skip,
      page,
    );
  }

  @Post('search')
  searchAnime(@Body() body: SearchAnimeDto) {
    return this.animeService?.searchAnime(body);
  }

  @Get('metadata')
  getMetadata() {
    return this?.animeService?.getMetadata();
  }
}
