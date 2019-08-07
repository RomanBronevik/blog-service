import { createParamDecorator } from "@nestjs/common";

export const ArticleD = createParamDecorator((data, req) => req.body);