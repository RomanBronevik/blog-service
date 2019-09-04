import { Module } from '@nestjs/common';
import { ArticleModule } from './module/article/article.module';
import { connection } from './database'
import { AuthModule } from './module/auth/auth.module';
import { TagModule } from './module/tag/tag.module';
import { CommentModule } from './module/comment/comment.module';
import { AppController } from './app.controller';
import { LoggerModule } from './common/logger/logger.module';
import { ExceptionFactoryModule } from './common/lib/ExceptionFactory/factory.module';

@Module({
  imports: [
    ArticleModule,
    AuthModule,
    connection,
    TagModule,
    CommentModule,
    LoggerModule,
    ExceptionFactoryModule
  ],
  controllers: [AppController]
})


export class AppModule { }
