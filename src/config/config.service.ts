import { Injectable } from "@nestjs/common";
import { config } from './config'
@Injectable()
export class Scad1Conf {
    private config = config;
}