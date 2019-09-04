import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable } from "typeorm";
import { Base } from "./base";
import { ArticleEntity } from "./article.entity";

@Entity('tag')
export class TagEntity extends Base {
    @Column()
    name: string;

    @ManyToMany(type => ArticleEntity, { cascade: true })
    @JoinTable()
    articles: ArticleEntity[];
}