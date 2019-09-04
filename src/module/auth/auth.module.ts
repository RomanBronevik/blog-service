import { Module } from "@nestjs/common";
import { AuthController } from "./auth.controller";
import { AuthService } from "./auth.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { UserEntity } from "../../model/user.entity";
import { Skad1ogger } from "../../common/logger/logger";

@Module({
    imports: [TypeOrmModule.forFeature([UserEntity])],
    controllers: [AuthController],
    providers: [Skad1ogger, AuthService]
})
export class AuthModule { }