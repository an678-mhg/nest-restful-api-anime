import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class GetAnimeBySlugDto {
  @ApiProperty({
    default: 'hiep-si-xuong-tren-duong-du-hanh-den-the-gioi-khac',
  })
  @IsNotEmpty()
  @IsString()
  slug: string;
}

export class FilterAnimeDto {
  @ApiProperty({ default: ['15', '4', '1'] })
  category_id: string[];

  @ApiProperty({ default: ['1', '2'] })
  country_id: string[];

  @ApiProperty({ default: '2023' })
  year: string;

  @ApiProperty({ default: 20 })
  @IsNotEmpty()
  @IsString()
  limit: string;

  @ApiProperty({ default: 1 })
  @IsNotEmpty()
  @IsString()
  page: string;
}

export class SearchAnimeDto {
  @ApiProperty({ default: 'one' })
  @IsNotEmpty()
  @IsString()
  q: string;

  @ApiProperty({ default: 20 })
  @IsNotEmpty()
  @IsString()
  limit: string;

  @ApiProperty({ default: 1 })
  @IsNotEmpty()
  @IsString()
  page: string;
}
