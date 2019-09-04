import { Injectable } from "@nestjs/common";
import { InjectRepository, InjectConnection } from "@nestjs/typeorm";
import { Repository, InsertResult, UpdateResult, Connection, DeleteQueryBuilder } from "typeorm";
import { ArticleEntity } from "../../model/article.entity";
import { CreateArticleDto, UpdateArticleDto, ArticleDto, QueryDto } from "./dto/article.dto";
import { IArticleService } from "./interface/article-service.interface";
import { Skad1ogger } from "../../common/logger/logger";

@Injectable()
export class ArticleService implements IArticleService {
    private readonly qb = this.ArticleRepository.createQueryBuilder("article");
    constructor(
        @InjectRepository(ArticleEntity)
        private readonly ArticleRepository: Repository<ArticleEntity>,
        private readonly logger: Skad1ogger
    ) { }
    async search({
        pn = 1,
        kw,
        reverse,
        tag
    }: QueryDto): Promise<any> {
        return this.qb.where("").offset((pn - 1) * 10).limit(10).getMany();
    }
    async findOne(id: number): Promise<ArticleEntity | undefined> {
        const result = await this.qb.where('id = :id', { id }).getOne();
        if (result) {
            return result;
        } else {
            return undefined;
        }
    }
    async delete(id: number): Promise<boolean> {
        await this.qb.delete().where("id=:id", { id }).execute();
        return true;
    }


    async update(update: UpdateArticleDto): Promise<any> {
        await this.qb.update().set(update).where("id = :id", { id: update.id }).execute();
    }


    async publish(article: CreateArticleDto): Promise<any> {
        return await this.qb.insert().values(article).execute();
    }

}