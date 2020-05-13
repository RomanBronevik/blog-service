import { Document } from 'mongoose';

export interface CreateUserDto {
  name: string;
  password: string;
  phone: string;
  uuid: string;
}

export interface UserLoginDto {
  name: string;
  password: string;
}
