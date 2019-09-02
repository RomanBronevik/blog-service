import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
import { Base } from "./base";

@Entity('tag')
export class TagEntity extends Base {
    @Column()
    name: string;
}