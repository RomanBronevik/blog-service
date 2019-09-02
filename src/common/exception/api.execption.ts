import { HttpException, HttpStatus } from "@nestjs/common";
import { ApiResCode } from "../enums/ApiResCode";

export class ApiExecption extends HttpException {
    private errMessage: string;
    private errCode: ApiResCode;
    constructor(errorMessage: string, errorCode: ApiResCode, statusCode: HttpStatus) {
        super(errorMessage, statusCode);
        this.errMessage = errorMessage;
        this.errCode = errorCode;
    }
    public get errorMessage(): string {
        return this.errMessage;
    }
    public get errorCode(): ApiResCode {
        return this.errCode;
    }
}