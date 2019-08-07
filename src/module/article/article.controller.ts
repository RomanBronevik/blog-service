import { Controller, Post, Body, Get, Param, Query, Delete } from "@nestjs/common";
import { ArticleDto, CreateArticleDto } from "./dto/article.dto";
import { ArticleService } from "./article.service";


@Controller('article')
export class ArticleController{
    constructor(private readonly articleService: ArticleService){}
    
    @Get()
    async getAllArticlesPaging(@Query('page') page: number){
        return this.articleService.getArticlesPaging(page);
    }

    @Post()
    async publishOneArticle(@Body() article: CreateArticleDto){
        await this.articleService.publishArticle(article);
    }

    @Get(':id')
    async getArticle(@Param(':id') id: number){
        return `get#${id}`
    }
    
    @Delete(':id')
    async deleteArticle(@Param('id') id: number){
        return `delete#${id}`;
    }
}