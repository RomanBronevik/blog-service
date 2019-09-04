import { ApiExecption } from "../../../common/exception/api.execption";
import { ApiResCode } from "../../../common/enums/ApiResCode";
import { HttpStatus, Injectable } from "@nestjs/common";

@Injectable()
export class ExceptionFactory {
    public static throwAuthException() {
        this.throwAuthErr('need auth', ApiResCode.AUTH_FORBIDDEN);
    }
    public static throwP2PWrong() {
        this.throwErr('两次密码不一致', ApiResCode.AUTH_FORBIDDEN, 200);
    }
    public static throwUserExisted() {
        this.throwCommonErr('用户已经存在', ApiResCode.AUTH_FORBIDDEN);
    }
    private static throwErr(s: string, c: ApiResCode, sc: HttpStatus) {
        throw new ApiExecption(s, c, sc);
    }

    private static throwAuthErr(s: string, c: ApiResCode, sc: HttpStatus = 400) {
        this.throwErr(s, c, sc);
    }

    private static throwCommonErr(s: string, c: ApiResCode, sc: HttpStatus = 200) {
        this.throwErr(s, c, sc);
    }
}