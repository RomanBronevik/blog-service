import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Observable } from 'rxjs';

@Injectable()
export class AuthGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
    const request = context.switchToHttp().getRequest();
    const token = request.headers.authorization;
    const path = request.raw.originalUrl;
    const method = request.raw.method;
    console.log(path, method);
    request.$$user = {
      name: 'kyar',
    };
    if (token) {
      console.log('登录账号');
    } else {
      console.log('未登录账号');
    }
    return true;
  }
}
