import {NestFactory} from '@nestjs/core';
import {AppModule} from './app.module';
import * as path from 'path';
import * as dotenv from 'dotenv';

async function bootstrap() {
  const filePath = `${path.resolve(process.cwd(), `environments/${process.env.NODE_ENV || 'development'}.env`)}`;
  dotenv.config({path: filePath});
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  await app.listen(Number(process.env.SERVICE_PORT) || 3000);
  console.log('Service listening to port', Number(process.env.SERVICE_PORT) || 3000);
}

bootstrap();
