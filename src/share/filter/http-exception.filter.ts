import { ExceptionFilter, HttpException, ArgumentsHost } from '@nestjs/common';
import { ApiException } from '../exception/api.exception';

export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const http = host.switchToHttp();
    const response = http.getResponse();
    console.log(exception);
    if (exception instanceof ApiException) {
      response.code(200).send({
        code: exception.getCode(),
        message: exception.getErrorMessage(),
      });
    } else {
      response.code(exception.getStatus()).send({
        message: exception.getResponse(),
      });
    }
  }
}
