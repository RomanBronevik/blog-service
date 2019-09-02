import { Module } from "@nestjs/common";
import { Scad1Conf } from "./config.service";

@Module({
    providers: [Scad1Conf],
    exports: [Scad1Conf]
})
export class ConfigModule { }