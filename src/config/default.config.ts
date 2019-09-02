import { join } from "path";
export const defaultConfig = {
    orm: {
        "type": 'mysql',
        "host": "localhost",
        "port": 3306,
        "username": "root",
        "password": "root",
        "database": "scad1",
        "entities": [join(__dirname, '../', '**/**.entity{.ts,.js}')],
        "synchronize": true
    },
    log4js: {},
}