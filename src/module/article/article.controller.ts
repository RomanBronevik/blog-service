import { Controller, Post, Body, Get, Param, Query, Delete } from "@nestjs/common";
import { ArticleDto, CreateArticleDto } from "./dto/article.dto";
import { CreateArticlePipe } from "./pipes/create_article.pipe";
import { IdPipe } from "./pipes/id.pipe";
import { IArticleService } from "./interface/article-service.interface";
import { ArticleService } from "./article.service";
import { permission } from "../../common/decorator/permission.decorator";

@Controller('article')
export class ArticleController {
    constructor(private readonly articleService: ArticleService) { }
    @Get()
    async getArticles(@Query('q') q: string, @Query('type') type: string) {
        switch (type) {
            case 'archive':
                return await this.articleService.getArticleByArticleTitle(q);
            case 'tag':
                return await this.articleService.getArticlesByTag(q);
            case 'page':
                return await this.articleService.getArticlesPaging(1);
            default:
                return await this.articleService.getArticlesPaging(0);
        }
    }

    @Post()
    @permission('admin')
    async publishOneArticle(@Body(new CreateArticlePipe()) article: CreateArticleDto) {
        return await this.articleService.publishArticle(article);
    }

    @Get(':id')
    async getArticle(@Param('id', new IdPipe()) id: number) {
        return await this.articleService.getArticleById(id);
    }

    @Delete(':id')
    async deleteArticle(@Param('id') id: number) {
        return await this.articleService.deleteArticleById(id);
    }
}