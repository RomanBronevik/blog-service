import { Module } from "@nestjs/common";
import { ExceptionFactory } from "./ExceptionFactory";

@Module({
    imports:[ExceptionFactory],
    exports:[ExceptionFactory]
})
export class ExceptionFactoryModule{}