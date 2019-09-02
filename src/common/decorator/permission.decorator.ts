import { SetMetadata } from "@nestjs/common";

export const permission = (...args: string[]) => SetMetadata('permission', args);