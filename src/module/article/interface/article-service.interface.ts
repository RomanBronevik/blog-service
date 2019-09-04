import { ArticleEntity } from "src/model/article.entity";
import { UpdateArticleDto, CreateArticleDto, ArticleDto, QueryDto } from "../dto/article.dto";
import { InsertResult, UpdateResult } from "typeorm";

export interface IArticleService {
    search(options: QueryDto): void;
    delete(id: number): void;
    update(update: UpdateArticleDto): void;
    publish(article: CreateArticleDto): void;
    findOne(id: number): void;
}