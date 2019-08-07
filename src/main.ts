import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { logger } from './lib/middleware/logger.middleware';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(logger);
  await app.listen(3000, ()=>{console.log('server is running on port 3000..')});
}

bootstrap();
