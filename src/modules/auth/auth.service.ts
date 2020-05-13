import { Injectable } from '@nestjs/common';
import { UserModel } from './interface/auth.interface';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateUserDto } from './dto/auth.dto';

@Injectable()
export class AuthService {
  constructor(@InjectModel('Auth') private authModel: Model<UserModel>) {}

  async getUserById(id: string) {
    return await this.authModel.findById(id);
  }

  async search(key) {
    return await this.authModel.find({ ...key });
  }

  async remove(id: string) {
    return await this.authModel.deleteOne({ _id: id });
  }

  async create(user: CreateUserDto) {
    user.password = '';
    return await this.authModel.create(user);
  }

  async checkExisted(name: string): Promise<UserModel> {
    return await this.authModel.findOne({ name });
  }

  async login(username: string, password: string) {
    const user = await this.checkExisted(username);
    if (user && user.password === password) {
      return user;
    }
    return false;
  }
}
