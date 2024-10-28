// main.ts
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Enable CORS for all routes
  app.enableCors({
    origin: 'http://localhost:4200', // Replace with the origin of your frontend
    credentials: true,
  });

  await app.listen(3000);
}

bootstrap();

