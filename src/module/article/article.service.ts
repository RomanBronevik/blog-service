import { Injectable, BadGatewayException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { ArticleEntity } from "../../model/article.entity";
import { CreateArticleDto, UpdateArticleDto, ArticleDto } from "./dto/article.dto";
    
@Injectable()
export class ArticleService{
    constructor(
        @InjectRepository(ArticleEntity)
        private readonly ArticleRepository: Repository<ArticleEntity>
    ){}

    getArticlesPaging(page: number): Promise<ArticleDto[]>{
        return this.ArticleRepository.find({where:{limit:10, offset:page}});
    }
    
    getArticleById(id: number): Promise<ArticleEntity[]>{
        return this.ArticleRepository.find({where:{id}});
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

    updateArticle(id: number, article: UpdateArticleDto){
        return this.ArticleRepository.update(id, article);
    }
}