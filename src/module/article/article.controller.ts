import { Controller, Post, Body, Get, Param, Query, Delete, ParseIntPipe } from "@nestjs/common";
import { ArticleDto, CreateArticleDto, QueryDto } from "./dto/article.dto";
import { CreateArticlePipe } from "./pipes/create_article.pipe";
import { IdPipe } from "./pipes/id.pipe";
import { IArticleService } from "./interface/article-service.interface";
import { ArticleService } from "./article.service";
import { permission } from "../../common/decorator/permission.decorator";
import { type } from "os";

@Controller('article')
export class ArticleController {
    constructor(private readonly articleService: ArticleService) { }
    @Get()
    async getArticles(@Query() q: QueryDto) {
        return await this.articleService.search(q);
    }

    @Post()
    @permission('admin')
    async publishOneArticle(@Body() article: CreateArticleDto) {
        return await this.articleService.publish(article);
    }

    @Get(':id')
    async getArticle(@Param('id', new ParseIntPipe()) id: number) {
        return this.articleService.findOne(id);
    }

    @Delete(':id')
    async deleteArticle(@Param('id') id: number) {
        await this.articleService.delete(id);
        return { ok: 0 };
    }
}