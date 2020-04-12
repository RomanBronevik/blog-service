import { AuthModule } from './modules/auth/auth.module';
import { Module } from '@nestjs/common';

import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [AuthModule, MongooseModule.forRoot('mongodb://localhost/nest')],
})
export class AppModule {}
