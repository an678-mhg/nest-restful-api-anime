import { Module } from '@nestjs/common';
import { CrawlController } from './crawl.controller';
import { CrawlService } from './crawl.service';
import { RequestModule } from 'src/request/request.module';
import { AnimeModule } from 'src/anime/anime.module';

@Module({
  controllers: [CrawlController],
  providers: [CrawlService],
  imports: [RequestModule, AnimeModule],
})
export class CrawlModule {}
