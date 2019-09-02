import { Injectable } from "@nestjs/common";
import { Auth } from "./auth.interface";


export interface IAuthService {
    getUser(id: number): Promise<Auth>;
    delete(): void;
    update(): void;
}