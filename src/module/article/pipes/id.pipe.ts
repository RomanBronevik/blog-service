import { Injectable, PipeTransform, ArgumentMetadata } from "@nestjs/common";
import { ApiExecption } from "../../../common/exception/api.execption";

@Injectable()
export class IdPipe implements PipeTransform {
    transform(value: any, metadata: ArgumentMetadata) {
        const v: number = parseInt(value);
        if (typeof v !== 'number') {
            throw new ApiExecption('is not value', 1, 200);
        }
        return value;
    }
}