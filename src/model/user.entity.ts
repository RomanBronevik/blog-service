import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { Base } from "./base";

@Entity('user')
export class UserEntity extends Base {
    @Column()
    username: string;

    @Column()
    password: string;

    @Column()
    email: string;

    @Column()
    birth: string;

    @Column()
    phone: string;

    @Column()
    role: string
}