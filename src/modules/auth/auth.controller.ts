import { Controller, Get, Req, Put } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth/user')
export class AuthController {
  constructor(private as: AuthService) {}

  @Get('')
  async getUser(@Req() req) {
    console.log(req.$$user);
  }

  @Put('')
  async add() {
    //pass
  }
}
