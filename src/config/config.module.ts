import { Module } from "@nestjs/common";
import { Skad1Conf } from "./config.service";

@Module({
    providers: [Skad1Conf],
    exports: [Skad1Conf]
})
export class ConfigModule { }