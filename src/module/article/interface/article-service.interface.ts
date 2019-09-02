import { ArticleEntity } from "src/model/article.entity";
import { UpdateArticleDto, CreateArticleDto, ArticleDto } from "../dto/article.dto";
import { InsertResult, UpdateResult } from "typeorm";

export interface IArticleService {
    getArticlesPaging(page: number): Promise<ArticleEntity[]>;

    getArticleById(id: number): Promise<ArticleDto>;

    getArticlesByTag(tag: string): Promise<ArticleEntity[]>;

    getArticleByArticleTitle(title: string): Promise<ArticleEntity>;

    publishArticle(article: CreateArticleDto): Promise<InsertResult>;

    deleteArticleById(id: number): Promise<any>;

    updateArticleById(id: number, article: UpdateArticleDto): Promise<UpdateResult>;
}