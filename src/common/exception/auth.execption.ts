import { HttpException, HttpStatus } from "@nestjs/common";
import { ApiResCode } from "../enums/ApiResCode";

export class AuthException extends HttpException {
    private errorMessage: string;
    private resCode: ApiResCode;
    constructor(message: string, resCode: ApiResCode, statusCode: HttpStatus) {
        super(message, statusCode);
        this.errorMessage = message;
        this.resCode = resCode;
    }
}