import { IsNotEmpty, IsString } from 'class-validator';

export class CrawlAnimeDetailDto {
  @IsNotEmpty()
  @IsString()
  slug: string;
}
