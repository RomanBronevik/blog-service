import { IsString, IsNotEmpty, MaxLength, MinLength } from "class-validator";

export class loginDto {
    @IsString()
    @IsNotEmpty()
    username: string;

    @IsString()
    @IsNotEmpty()
    @MaxLength(16)
    @MinLength(6)
    password: string;
}


export class UserDto {

}

export class signUpDto extends loginDto {
    @IsString()
    @IsNotEmpty()
    @MaxLength(16)
    @MinLength(6)
    password2: string;
}