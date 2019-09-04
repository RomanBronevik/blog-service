import { IsString, IsInt, Max, Min, IsIn, IsNotEmpty } from "class-validator";
import { Type } from 'class-transformer';
import { ArticleEntity } from "../../../model/article.entity";

export class CreateArticleDto {
    @IsString({ message: 'must be string' })
    @Type(() => String)
    title: string;

    @IsString()
    content: string;

    @IsInt()
    views: number = 0;

    @IsInt()
    likes: number = 0;
}

export class UpdateArticleDto extends CreateArticleDto {
    @IsInt()
    @IsNotEmpty()
    @Min(0)
    id: number;
}

export class ArticleDto extends ArticleEntity { }

export class QueryDto {
    @IsInt({ message: "must be int" })
    @Type(() => Number)
    @Min(1, { message: "最小页码不能小于1" })
    pn: number = 1;

    reverse: boolean = true;

    kw: string = '';

    tag: string[] = [];
}