import { Module } from '@nestjs/common';
import { ArticleModule } from   './module/article/article.module';
import { connection } from './database'

@Module({
  imports: [
    ArticleModule, 
    connection,
  ],
})


export class AppModule{}
