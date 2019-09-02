import { BaseExceptionFilter } from "@nestjs/core";
import { Catch, ArgumentsHost } from "@nestjs/common";

@Catch()
export class AnyExecptionFilter extends BaseExceptionFilter {
    constructor() {
        super()
    }
    public catch(execption: any, host: ArgumentsHost) {
        const ctx = host.switchToHttp();
        const res = ctx.getResponse();
        res.status(400).json({
            code: -1,
            message: '未知错误'
        })
    }
}