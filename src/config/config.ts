import { defaultConfig } from './default.config';
import { envConfig } from './env.config';

export const config = Object.assign(defaultConfig, envConfig);