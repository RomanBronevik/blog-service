import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
import { Expose } from "class-transformer";

@Entity()
export class Base {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        type: 'bigint',
        default: Math.floor(+ new Date())
    })
    createdAt: number;

    @Column({
        type: 'bigint',
        default: Math.floor(+ new Date())
    })
    updatedAt: number;
}