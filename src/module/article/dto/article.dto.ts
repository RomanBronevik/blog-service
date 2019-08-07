export class ArticleDto{
    readonly title: string;
}

export class UpdateArticleDto{

}

export class CreateArticleDto{
    title: string;
    content: string;
    tag: string;
    createAt: number = new Date().getTime();
    updatedAt: number = new Date().getTime();
    views: number = 0;
    likes: number = 0;
}
