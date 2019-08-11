import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity('article')
export class ArticleEntity{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @Column()
    content: string;

    @Column()
    createdAt: number;

    @Column()
    updatedAt: number;
    
    @Column()
    views: number = 0;

    @Column()
    likes: number = 0;

    @Column()
    tag: string;
}