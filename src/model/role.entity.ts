import { Entity, Column, ManyToMany, OneToOne, JoinTable } from "typeorm";
import { Base } from "./base";
import { UserEntity } from "./user.entity";

@Entity('role')
export class RoleEntity extends Base {
    @Column()
    des: string;

    @Column()
    permission: number;

    @ManyToMany(type => UserEntity)
    @JoinTable()
    users: UserEntity[]
}