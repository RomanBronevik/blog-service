import { Injectable, NestInterceptor, ExecutionContext, CallHandler } from '@nestjs/common';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { ApiCode } from '../enums/api-code';
@Injectable()
export class ResponseInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler<any>): Observable<any> | Promise<Observable<any>> {
    const http = context.switchToHttp();
    const response = http.getResponse();
    return next.handle().pipe(
      tap(data => {
        response.code(200).send({
          code: ApiCode.SUCCESS,
          data,
        });
      }),
    );
  }
}
