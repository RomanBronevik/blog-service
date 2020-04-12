import { Document } from 'mongoose';
export interface IAuthService {
  getUser(): Promise<User[]>;
  add(): Promise<User>;
}

export interface User extends Document {
  id: string;
  name: string;
  password: string;
}
