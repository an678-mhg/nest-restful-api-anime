import { Module } from '@nestjs/common';
import { AnimeService } from './anime.service';
import { PrismaModule } from 'src/prisma/prisma.module';
import { AnimeController } from './anime.controller';

@Module({
  providers: [AnimeService],
  imports: [PrismaModule],
  exports: [AnimeService],
  controllers: [AnimeController],
})
export class AnimeModule {}
