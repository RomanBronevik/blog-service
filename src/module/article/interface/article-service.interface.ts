import { Article } from "./article.interface";

export interface IArticleService{
    getArticlesPaging(page: number): Promise<Article[]>;
}