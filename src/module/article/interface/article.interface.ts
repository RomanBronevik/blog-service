import { ArticleDto } from "../dto/article.dto";

export interface ISearchResult {
    data: ArticleDto[];
    count: number;
}


