import { Injectable, PipeTransform, ArgumentMetadata } from "@nestjs/common";
import { CreateArticleDto } from "../dto/article.dto";
import { validate } from 'class-validator'
import { plainToClass } from "class-transformer";

@Injectable()
export class CreateArticlePipe implements PipeTransform {
    async transform(value: any, metadata: ArgumentMetadata) {
        console.log(metadata);
        // const article = plainToClass(CreateArticleDto, value);
        // validate(article);
        return value;
    }
}