import { Controller, Post, Body, Get, Param, ParseIntPipe, Put } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { signUpDto, loginDto } from "./dto/user.dto";
import { permission } from "../../common/decorator/permission.decorator";

@Controller('auth')
export class AuthController {
    constructor(readonly aurhService: AuthService) { }

    @Put()
    async signUpDto(@Body() user: signUpDto) {
        return await this.aurhService.join(user);
    }

    @Post()
    async login(@Body() user: loginDto) {
        return await this.aurhService.login(user);
    }

    @Get(':id')
    @permission('admin')
    async getInfo(@Param('id', new ParseIntPipe()) id: number) {
        return await this.aurhService.getInfo(id);
    }
}