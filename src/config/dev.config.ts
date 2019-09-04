import { join } from "path";
export const devConfig = {
    env: 'development',
    orm: {
        "type": 'mysql',
        "host": "localhost",
        "port": 3306,
        "username": "root",
        "password": "123456",
        "database": "kyaruary",
        "entities": [join(__dirname, '../', '**/**.entity{.ts,.js}')],
        "synchronize": true
    },
    log4js: {},
    email: {},
    qiniu: {}
}