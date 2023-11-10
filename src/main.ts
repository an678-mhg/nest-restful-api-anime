import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(new ValidationPipe());

  const config = new DocumentBuilder()
    .setTitle('Document Rest API Anime')
    .setDescription('This is Anime API build with NestJS, Prisma, etc...')
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, config, {});
  SwaggerModule.setup('document', app, document);

  await app.listen(9999);
}
bootstrap();
