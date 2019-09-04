import { Injectable, Inject } from "@nestjs/common";
import { IAuthService } from "./interface/auth-service.interface";
import { Auth } from "./interface/auth.interface";
import { UserDto, loginDto, signUpDto } from "./dto/user.dto";
import { UserEntity } from "../../model/user.entity";
import { Repository } from "typeorm";
import { ApiExecption } from "../../common/exception/api.execption";
import { ApiResCode } from "../../common/enums/ApiResCode";
import { InjectRepository } from "@nestjs/typeorm";
import { Skad1ogger } from "../../common/logger/logger";
import { ExceptionFactory } from "../../common/lib/ExceptionFactory/ExceptionFactory";

@Injectable()
export class AuthService implements IAuthService {
    private readonly qb = this.UserRepository.createQueryBuilder('user');

    constructor(
        @InjectRepository(UserEntity)
        private readonly UserRepository: Repository<UserEntity>,
        private readonly logger: Skad1ogger
    ) { }
    async getInfo(id: number): Promise<UserEntity | undefined> {
        return await this.qb.where('id = :id', { id }).getOne();
    }

    async update() { }


    async delete(id: number): Promise<any> {
        return await this.qb.delete().where('id=:id', { id }).execute();
    }


    async join(user: signUpDto) {
        let result = null;
        user.password !== user.password2 ? ExceptionFactory.throwP2PWrong() : this.logger.info(user.username + ' , 两次密码验证通过');
        const fd = await this.qb.where('username = :username', { username: user.username }).getOne();
        fd ? ExceptionFactory.throwUserExisted() : result = await this.qb.insert().values(user).execute();
        return result;
    }


    async login(user: loginDto) {
        let result = null;
        const fd = await this.qb.where('username = :username', { username: user.username }).getOne();
        (fd && fd.password === user.password) ? result = await this.signToken(fd) : ExceptionFactory.throwAuthException();
        return result;
    }

    private async signToken(user: UserEntity) {
        return {
            token: user.roles,
            username: user.username,
        }
    }
}