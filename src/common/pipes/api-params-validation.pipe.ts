import { Injectable, PipeTransform, ArgumentMetadata, Type } from "@nestjs/common";
import { plainToClass } from "class-transformer";
import { validate } from "class-validator";
import { ApiExecption } from "../exception/api.execption";
import { ApiResCode } from "../enums/ApiResCode";


@Injectable()
export class ApiParamsValidationPipe implements PipeTransform {
    async transform(value: any, metadata: ArgumentMetadata) {
        const { metatype } = metadata;
        if (!metatype || this.isCommon(metatype)) return value;
        const v = plainToClass(metatype, value);
        const err = await validate(v);
        if (err.length > 0) {
            throw new ApiExecption(err.join('-'), ApiResCode.INVALID_PARAMS, 400);
        } else {
            return v;
        }
    }

    isCommon(metatype: Type<any>) {
        const comonTypes = [String, Object, Number, Boolean, Array];
        return comonTypes.find(type => metatype === type);
    }
}