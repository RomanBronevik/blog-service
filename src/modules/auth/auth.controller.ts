import { Controller, Get, Post } from '@nestjs/common';
import { IAuthService } from './interface/auth.interface';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private as: AuthService) {}

  @Get('user')
  async getUser() {
    return await this.as.getUser();
  }

  @Get('add')
  async add() {
    return await this.as.add();
  }
}
