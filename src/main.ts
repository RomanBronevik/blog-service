import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { logger } from './lib/middleware/logger.middleware';
import { HttpExceptionFilter } from './lib/filters/httpException.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(logger);
  app.useGlobalFilters(new HttpExceptionFilter());
  await app.listen(8443, ()=>{console.log('server is running on port 8443..')});
}

bootstrap();
