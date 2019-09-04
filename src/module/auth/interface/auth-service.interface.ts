import { Auth } from "./auth.interface";


export interface IAuthService {
    getInfo(id: number): Promise<any>;
    delete(id: number): Promise<any>
    update(): void;
}