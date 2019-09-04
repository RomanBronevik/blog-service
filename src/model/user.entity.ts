import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToMany } from "typeorm";
import { Base } from "./base";
import { RoleEntity } from "./role.entity";

@Entity('user')
export class UserEntity extends Base {
    @Column()
    username: string;

    @Column()
    password: string;

    @Column({
        default: ''
    })
    email: string;

    @Column({
        default: ''
    })
    birth: string;

    @Column({
        default: ''
    })
    phone: string;

    @ManyToMany(type => RoleEntity)
    roles: RoleEntity[]
}