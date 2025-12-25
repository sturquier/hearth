import { NestFactory } from '@nestjs/core';
import { Logger } from 'nestjs-pino';

import { AppModule } from './app.module';
import { setupSwagger } from './shared/infrastructure/api/api.config';

async function bootstrap(): Promise<void> {
  const app = await NestFactory.create(AppModule, { bufferLogs: true });

  app.enableCors();

  setupSwagger(app);

  app.useLogger(app.get(Logger));

  await app.listen(process.env.PORT ?? 3000);
}

void bootstrap();
