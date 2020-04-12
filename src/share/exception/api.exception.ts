import { HttpException } from '@nestjs/common';
import { ApiCode } from '../enums/api-code';

export class ApiException extends HttpException {
  private apiCode: ApiCode;
  private errorMessage: string;
  constructor(code: ApiCode, message: string) {
    super(message, code);
    this.errorMessage = message;
    this.apiCode = code;
  }
  getCode() {
    return this.apiCode;
  }
  getErrorMessage() {
    return this.errorMessage;
  }
}
