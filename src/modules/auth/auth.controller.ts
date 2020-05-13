import { Controller, Get, Req, Put, Body, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUserDto, UserLoginDto } from './dto/auth.dto';
import { AlreadyExistedExceptopn, UnauthorizationException } from 'src/share/exception/api.exception';

@Controller('auth/user')
export class AuthController {
  constructor(private as: AuthService) {}

  @Get('')
  async getUser(@Req() req) {
    console.log(req.$$user);
  }

  @Put('')
  async add(@Body() user: CreateUserDto) {
    //pass
    const hasOne = await this.as.checkExisted(user.name);
    if (hasOne) {
      throw AlreadyExistedExceptopn();
    } else {
      await this.as.create(user);
      return { msg: '创建成功' };
    }
  }

  @Post()
  async login(@Body() user: UserLoginDto) {
    const correct = await this.as.login(user.name, user.password);
    if (correct) {
      return { token: '' };
    } else {
      throw UnauthorizationException();
    }
  }
}
