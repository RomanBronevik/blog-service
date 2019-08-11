import { Controller, Get } from "@nestjs/common";

@Controller()
export class AppController{
    @Get()
    homepage(){
        return 'http://api.kyaruary.com';
    }
}