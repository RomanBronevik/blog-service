import { IsString, IsInt } from "class-validator";

export interface ArticleDto{
    title: string,
    content: string,
    views: number,
    like: number
}

export interface UpdateArticleDto{

}

export class CreateArticleDto{
    @IsString()
    title: string;
    
    @IsString()
    content: string;

    @IsString()
    tag: string;

    @IsInt()
    createAt: number; 

    @IsInt()
    updatedAt: number;

    @IsInt()
    views: number;
    
    @IsInt()
    likes: number;
}
