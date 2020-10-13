import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';
import { NestExpressApplication } from '@nestjs/platform-express';
import * as express from 'express';
import { join } from 'path';
import 'dotenv/config';

async function bootstrap() {
  const logger = new Logger('Bootstrap');
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  app.enableCors();
  logger.log(`CORS enabled.`);

  app.use('/uploads', express.static(join(__dirname, '..', 'uploads')));
  logger.log(`Static server running.`);

  const port = process.env.PORT;
  await app.listen(port, () => logger.log(`Running on port ${port}.`));
}
bootstrap();
