import { Injectable, PipeTransform, ArgumentMetadata } from "@nestjs/common";

@Injectable()
export class CreateArticlePipe implements PipeTransform{
    async transform(value: any, metadata: ArgumentMetadata){
        console.log(value);
        console.log(metadata);
        return value;
    }
}