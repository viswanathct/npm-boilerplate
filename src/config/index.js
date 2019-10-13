import { env } from 'process';

const { NODE_ENV: nodeEnv = 'development' } = env;

const config = {
	env: nodeEnv,
};

export {
	config,
};
