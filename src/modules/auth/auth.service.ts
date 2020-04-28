import { Injectable } from '@nestjs/common';
import { IAuthService, UserModel } from './interface/auth.interface';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateUserDto } from './dto/auth.dto';

@Injectable()
export class AuthService {
  constructor(@InjectModel('Auth') private authModel: Model<UserModel>) {}
}
