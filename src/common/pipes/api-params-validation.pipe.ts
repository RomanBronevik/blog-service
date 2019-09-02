import { Injectable, PipeTransform, ArgumentMetadata, Type } from "@nestjs/common";
import { plainToClass } from "class-transformer";
import { validate } from "class-validator";


@Injectable()
export class ApiParamsValidationPipe implements PipeTransform {
    transform(value: any, metadata: ArgumentMetadata) {
        const { metatype } = metadata;
        if (!metatype || this.isCommon(metatype)) return value;
        const v = plainToClass(metatype, value);
        validate(v).then(error => {
            if (error.length > 0) return false;
            else return v;
        })
        return value;
    }

    isCommon(metatype: Type<any>) {
        const comonTypes = [String, Object, Number, Boolean, Array];
        return comonTypes.find(type => metatype === type);
    }
}