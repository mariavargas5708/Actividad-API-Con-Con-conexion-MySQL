import 'dotenv/config';
import {
  BadRequestException,
  ValidationPipe,
} from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      exceptionFactory: (errores) => {
        const mensajes = errores.flatMap((error) =>
          Object.values(error.constraints ?? {}),
        );

        return new BadRequestException({
          mensaje: 'Error de validación',
          errores: mensajes,
          codigo: 400,
        });
      },
    }),
  );

  await app.listen(process.env.PORT ?? 3000);
}

bootstrap();

