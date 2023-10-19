import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import {DocumentBuilder, SwaggerModule} from '@nestjs/swagger'

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe())
  app.enableCors({
    origin: "*"
  })

  const config = new DocumentBuilder()
    .setTitle("HealthTrack Pro Plus")
    .setDescription("A health tracking app.. using IoT and ML APIs")
    .setVersion("1.0.0")
    .build()

  const document = SwaggerModule.createDocument(app, config)
  SwaggerModule.setup('api-docs', app, document)

  await app.listen(process.env.PORT || 4000);
}
bootstrap();
