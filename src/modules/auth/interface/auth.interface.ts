import { Document } from 'mongoose';
import { CreateUserDto } from '../dto/auth.dto';
export interface IAuthService {
  add(user: CreateUserDto): Promise<UserModel>;
  validate(username, password): boolean;
  remove(ids: string[]): Promise<UserModel>;
  search(keywords: string): Promise<UserModel[]>;
  findOneById(): Promise<UserModel>;
}

export interface UserModel extends Document {
  id: string;
  name: string;
  password: string;
}
