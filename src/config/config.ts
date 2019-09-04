import { devConfig } from './dev.config';
import { envConfig } from './env.config';


export const config = envConfig.env === undefined ? devConfig : envConfig;