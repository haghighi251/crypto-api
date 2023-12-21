import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // Add OpenAPI configuration to enable API documentation and client generation.
  const config = new DocumentBuilder()
    .setTitle('CryptoHiveNet example')
    .setDescription('The CryptoHiveNet API description')
    .setVersion('1.0')
    .addTag('Crypto')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(8000);
}
bootstrap();
