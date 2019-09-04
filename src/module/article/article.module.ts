import { Module } from "@nestjs/common";
import { ArticleController } from './article.controller';
import { ArticleService } from './article.service';
import { TypeOrmModule } from "@nestjs/typeorm";
import { ArticleEntity } from "../../model/article.entity";
import { Skad1ogger } from "../../common/logger/logger";
import { TagEntity } from "../../model/tag.entity";
@Module({
    imports: [TypeOrmModule.forFeature([ArticleEntity, TagEntity])],
    controllers: [ArticleController],
    providers: [ArticleService, Skad1ogger]
})
export class ArticleModule { }