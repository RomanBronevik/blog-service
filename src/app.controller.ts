import { Controller, Get } from "@nestjs/common";

@Controller()
export class AppController {
    @Get()
    homepage() {
        return '<a href="http://api.kyaruary.com">http://api.kyaruary.com</a>';
    }
}