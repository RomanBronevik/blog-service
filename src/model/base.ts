import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
import { Expose } from "class-transformer";

@Entity('article')
export class Base {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        type: 'bigint',
        default: Math.floor(+ new Date() / 1000)
    })
    createdAt: number;

    @Column({
        type: 'bigint',
        default: Math.floor(+ new Date() / 1000)
    })
    updatedAt: number;
}