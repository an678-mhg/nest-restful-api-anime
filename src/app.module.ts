import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { PrismaModule } from './prisma/prisma.module';
// import { CrawlModule } from './crawl/crawl.module';
import { RequestModule } from './request/request.module';
import { AnimeModule } from './anime/anime.module';

@Module({
  imports: [PrismaModule, RequestModule, AnimeModule],
  controllers: [AppController],
})
export class AppModule {}
