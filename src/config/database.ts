import { TypeOrmModuleOptions } from "@nestjs/typeorm";
import { join } from 'path';

export const DatabaseConfig: TypeOrmModuleOptions = {
  "type": 'mysql',
  "host": "localhost",
  "port": 3306,
  "username": "root",
  "password": "123456",
  "database": "kyaruary",
  "entities": [join(__dirname, '../', '**/**.entity{.ts,.js}')],
  "synchronize": true
}