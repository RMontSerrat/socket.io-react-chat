import developmentConfig from './development.config';
import productionConfig from './production.config';

const envs = process.env.NODE_ENV === 'production' ? productionConfig : developmentConfig;

export default envs;