import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {
  @Get()
  getHello(): string {
    return 'This is Anime API build with NestJS, Prisma, etc...';
  }
}
