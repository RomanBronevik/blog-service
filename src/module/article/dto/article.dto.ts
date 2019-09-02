import { IsString, IsInt } from "class-validator";
import { Type } from 'class-transformer';
import { ArticleEntity } from "../../../model/article.entity";
export class UpdateArticleDto {

    @IsString({ message: 'must be string' })
    @Type(() => String)
    title: string;

    @IsString()
    content: string;

    @IsString()
    tag: string;
}

export class CreateArticleDto extends UpdateArticleDto {
    @IsInt()
    views: number;

    @IsInt()
    likes: number;
}

export class ArticleDto extends ArticleEntity { }