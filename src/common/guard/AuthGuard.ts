import { CanActivate, ExecutionContext } from "@nestjs/common";
import { Reflector } from "@nestjs/core";
import { ApiExecption } from "../exception/api.execption";
import { ApiResCode } from "../enums/ApiResCode";
import { Request } from "express-serve-static-core";
export class AuthGuard implements CanActivate {
    constructor(private reflector: Reflector) { }
    canActivate(context: ExecutionContext): boolean {
        const ctx = context.switchToHttp();
        const request: Request = ctx.getRequest();
        const roles = this.reflector.get<string[]>('permission', context.getHandler());
        if (roles) {
            // 获取token 解析token
            const auth = request.header('Authorization');
            if (auth && roles.includes(auth)) {
                return true;
            }
            throw new ApiExecption('need auth', ApiResCode.AUTH_FORBIDDEN, 400);
        } else {
            return true;
        }
    }
}