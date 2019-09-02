import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { HttpExceptionFilter } from './common/filters/httpException.filter';
import { ApiParamsValidationPipe } from './common/pipes/api-params-validation.pipe';
import { Skad1ogger } from './common/logger/logger';
import { AnyExecptionFilter } from './common/filters/anyExecption.filter';

async function bootstrap() {

  const app = await NestFactory.create(AppModule);
  const logger = app.get(Skad1ogger);
  // app.useLogger(logger);
  app.useGlobalPipes(new ApiParamsValidationPipe());
  app.useGlobalFilters(new HttpExceptionFilter());
  app.useGlobalFilters(new AnyExecptionFilter());
  logger.log('server is running on port 8443')
  await app.listen(8443, () => { console.log('server is running on port 8443') });

}

bootstrap();
