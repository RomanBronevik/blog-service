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

export function UnauthorizationException() {
  return new ApiException(ApiCode.UNAUTH, '账号或者密码错误');
}

export function NotFoundException() {
  return new ApiException(ApiCode.NOTFOUND, '找不到指定资源');
}

export function InvalideArgsException(message = '非法参数') {
  return new ApiException(ApiCode.INVALIDE, message);
}
