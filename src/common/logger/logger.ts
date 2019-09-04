import { LoggerService, Logger, Injectable } from "@nestjs/common";
import { configure, getLogger, Configuration } from 'log4js';

@Injectable()
export class Skad1ogger implements LoggerService {
    private logger = getLogger();
    constructor() {
        configure(log4jsConfi);
        this.logger.level = 'debug';
    }
    log(message: any, context?: string | undefined) {
        this.logger.log(message);
    }
    warn(message: any, context?: string | undefined) {
        this.logger.warn(message);
    }
    error(message: string, trace: string) {
        this.logger.error(message, trace);
    }
    info(message: string) {
        this.logger.info(message);
    }
}

export const log4jsConfi: Configuration = {
    appenders: {
        out: {
            type: 'console'
        }
    },
    categories: {
        default: {
            appenders: ['out'],
            level: 'info'
        }
    }
}