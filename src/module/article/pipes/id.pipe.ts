import { Injectable, PipeTransform, ArgumentMetadata } from "@nestjs/common";

@Injectable()
export class IdPipe implements PipeTransform{
    transform(value: any, metadata: ArgumentMetadata){
        if(typeof value != 'number'){
            throw new Error('is not value');
        }
        return value;
    }
}