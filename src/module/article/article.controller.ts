import { Controller, Post, Body, Get, Param, Query, Delete } from "@nestjs/common";
import { ArticleDto, CreateArticleDto } from "./dto/article.dto";
import { ArticleService } from "./article.service";
import { CreateArticlePipe } from "./pipes/create_article.pipe";
import { IdPipe } from "./pipes/id.pipe";


@Controller('article')
export class ArticleController{
    constructor(private readonly articleService: ArticleService){}
    
    @Get()
    async getArticles(@Query('q') q: string, @Query('type') type: string){
        switch(type){
            case 'archive':
                break;
            case 'tag':
                return this.articleService.getArticlesByTag(q);
            case 'page':
                const page: number = parseInt(q) || 0;
                return this.articleService.getArticlesPaging(page);
            default:
                return this.articleService.getArticlesPaging(0);
        }
    }

    @Post()
    async publishOneArticle(@Body(new CreateArticlePipe()) article: CreateArticleDto){
        await this.articleService.publishArticle(article);
    }

    @Get(':id')
    async getArticle(@Param('id', new IdPipe()) id: number){
        return this.articleService.getArticleById(id);
    }
    
    @Delete(':id')
    async deleteArticle(@Param('id') id: number){
        return this.articleService.deleteArticleById(id);
    }
}