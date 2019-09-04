import { Injectable } from "@nestjs/common";
import { config } from './config'
import { Skad1ogger } from "src/common/logger/logger";

@Injectable()
export class Skad1Conf {
    private readonly config = config;
    constructor(private readonly logger: Skad1ogger) {
        logger.log('当前使用的环境配置为', this.config.env);
    }
    public getDatabaseConfig() {
        return this.config.orm;
    }
    public getEmailConfig() {
        return this.config.email;
    }
    public getLog4jsConfig() {
        return this.getLog4jsConfig;
    }
}