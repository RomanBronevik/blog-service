import { Module } from "@nestjs/common";
import { Skad1ogger } from "./logger";

@Module({
    providers: [Skad1ogger],
    exports: [Skad1ogger]
})
export class LoggerModule { }