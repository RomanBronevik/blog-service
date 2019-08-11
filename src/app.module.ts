import { Module } from '@nestjs/common';
import { ArticleModule } from   './module/article/article.module';
import { connection } from './database'
import { AuthModule } from './module/auth/auth.module';
import { TagModule } from './module/tag/tag.module';
import { CommentModule } from './module/comment/comment.module';
import { AppController } from './app.controller';

@Module({
  imports: [
    ArticleModule, 
    AuthModule,
    connection,
    TagModule,
    CommentModule
  ],
  controllers:[AppController]
})


export class AppModule{}
