import { ArticleService } from '../article.service';
import { CreateArticleDto } from '../dto/article.dto';
import { Repository } from 'typeorm';
import { ArticleEntity } from '../../../model/article.entity';
import { InjectRepository } from '@nestjs/typeorm';
// import { ArticleEntity } from '../../../model/article.entity';

const s = new ArticleService(new Repository);
let article: CreateArticleDto = {
    title:"",
    content:"",
    createAt:0,
    updatedAt:0,
    tag:'',
    views:0,
    likes:0
}

;(async ()=>{
    const res = await s.publishArticle(article);
    console.log(res)
})()