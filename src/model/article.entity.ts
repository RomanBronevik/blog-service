import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
import { Base } from "./base";

@Entity('article')
export class ArticleEntity extends Base {
    @Column()
    title: string;

    @Column()
    content: string;

    @Column({
        default: 0
    })
    views: number;

    @Column({
        default: 0
    })
    likes: number;

    @Column()
    tag: string;

    @Column()
    status: number;
}