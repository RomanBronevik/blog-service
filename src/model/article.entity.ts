import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToMany } from "typeorm";
import { Base } from "./base";
import { TagEntity } from "./tag.entity";

@Entity('article')
export class ArticleEntity extends Base {
    @Column()
    title: string;

    @Column({
        type: 'text'
    })
    content: string;

    @Column({
        default: 0
    })
    views: number;

    @Column({
        default: 0
    })
    likes: number;

    @Column({
        default: 0
    })
    status: number;

    @Column({
        default: null
    })
    thumbnail: string;

    @ManyToMany(type => TagEntity)
    tags: TagEntity[]
}