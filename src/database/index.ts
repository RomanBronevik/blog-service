import { TypeOrmModule } from '@nestjs/typeorm';
import { DatabaseConfig } from '../config/database';


export const connection = TypeOrmModule.forRoot(DatabaseConfig);