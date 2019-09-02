import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository, InsertResult, UpdateResult } from "typeorm";
import { ArticleEntity } from "../../model/article.entity";
import { CreateArticleDto, UpdateArticleDto, ArticleDto } from "./dto/article.dto";
import { IArticleService } from "./interface/article-service.interface";

@Injectable()
export class ArticleService implements IArticleService {
    constructor(
        @InjectRepository(ArticleEntity)
        private readonly ArticleRepository: Repository<ArticleEntity>
    ) { }

    async getArticlesPaging(page: number): Promise<ArticleEntity[]> {
        return this.ArticleRepository.find({ skip: page * 10, take: 10 });
    }

    async getArticleById(id: number): Promise<ArticleDto> {
        return this.ArticleRepository.findOneOrFail(id);
    }

    async getArticlesByTag(tag: string): Promise<ArticleEntity[]> {
        return this.ArticleRepository.find({ where: { tag } });
    }

    async getArticleByArticleTitle(title: string): Promise<ArticleEntity> {
        return this.ArticleRepository.findOneOrFail({ title });
    }

    async publishArticle(article: CreateArticleDto): Promise<InsertResult> {
        return this.ArticleRepository.insert(article);

    }
    async deleteArticleById(id: number): Promise<any> {
        return this.ArticleRepository.delete(id);
    }

    async updateArticleById(id: number, article: UpdateArticleDto): Promise<UpdateResult> {
        return this.ArticleRepository.update(id, article);
    }
}