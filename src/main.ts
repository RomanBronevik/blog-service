import { NestFactory, Reflector } from '@nestjs/core';
import { AppModule } from './app.module';
import { HttpExceptionFilter } from './common/filters/httpException.filter';
import { ApiParamsValidationPipe } from './common/pipes/api-params-validation.pipe';
import { Skad1ogger } from './common/logger/logger';
import { AnyExceptionFilter } from './common/filters/anyException.filter';
import { AuthGuard } from './common/guard/AuthGuard';

async function bootstrap() {

  const app = await NestFactory.create(AppModule, {
    // logger: false
    bodyParser: true
  });
  // const logger = app.get(Skad1ogger);
  // app.useLogger(logger);
  app.useGlobalGuards(new AuthGuard(new Reflector()));
  app.useGlobalPipes(new ApiParamsValidationPipe());
  app.useGlobalFilters(new AnyExceptionFilter());
  app.useGlobalFilters(new HttpExceptionFilter());
  await app.listen(8443, () => { console.log('server is running on port 8443') });

}

bootstrap();
