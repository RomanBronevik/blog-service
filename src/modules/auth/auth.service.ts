import { Injectable } from '@nestjs/common';
import { IAuthService, User } from './interface/auth.interface';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class AuthService implements IAuthService {
  constructor(@InjectModel('Auth') private authModel: Model<User>) {}
  async getUser(): Promise<User[]> {
    const users = await this.authModel.find();
    return users;
  }
  async add() {
    const user = await this.authModel.create({
      name: 'kyar',
      password: '123456',
    });
    return user;
  }
}
