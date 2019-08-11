import { Injectable, BadGatewayException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { ArticleEntity } from "../../model/article.entity";
import { CreateArticleDto, UpdateArticleDto, ArticleDto } from "./dto/article.dto";
import { IArticleService } from "./interface/article-service.interface";
import { Article } from "./interface/article.interface";
    
@Injectable()
export class ArticleService implements IArticleService{
    constructor(
        @InjectRepository(ArticleEntity)
        private readonly ArticleRepository: Repository<ArticleEntity>
    ){}

    async getArticlesPaging(page: number): Promise<Article[]>{
        return this.ArticleRepository.find({skip: page * 10, take: 10});
    }
    
    async getArticleById(id: number): Promise<Article>{
        return this.ArticleRepository.findOneOrFail(id);
    }

    async getArticlesByTag(tag : string): Promise<Article[]>{
        return this.ArticleRepository.find({where:{tag}});
    }

    async getArticleByArticleTitle(title: string): Promise<Article>{
        return this.ArticleRepository.findOneOrFail({title});
    }

    publishArticle(article: CreateArticleDto){
        let result = null;
        try{
            result = this.ArticleRepository.create(article);
        }catch(e){
            console.log('error',e);
        }
        return result;
    }
    deleteArticleById(id: number): Promise<any>{
        return this.ArticleRepository.delete(id);
    }

    updateArticleById(id: number, article: UpdateArticleDto){
        return this.ArticleRepository.update(id, article);
    }
}