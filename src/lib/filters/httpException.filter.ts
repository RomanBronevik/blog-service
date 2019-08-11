import { Catch, HttpException, ArgumentsHost } from "@nestjs/common";
import { BaseExceptionFilter } from "@nestjs/core";

@Catch(HttpException)
export class HttpExceptionFilter extends BaseExceptionFilter{
    constructor(){
        super()
    }
    public catch( exception: HttpException, host: ArgumentsHost ){
        const ctx = host.switchToHttp();
        const req = ctx.getRequest();
        const res = ctx.getResponse();
        const status = exception.getStatus();
        res.status(status)
        .json({
            statusCode :status,
            date: +new Date(),
            path: req.url
        })
    }
}