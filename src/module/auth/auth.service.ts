import { Injectable } from "@nestjs/common";
import { IAuthService } from "./interface/auth-service.interface";
import { Auth } from "./interface/auth.interface";

@Injectable()
export class AuthService implements IAuthService{

    getUser(id: number): Promise<Auth> {
        throw new Error("Method not implemented.");
    }
}