import { env } from 'process';

const { NODE_ENV: nodeEnv = 'development' } = env;

const config = {
	env: nodeEnv,
	// #Note: ENV is destructured to save on access costs.
	envVars: { ...env },
};

export {
	config,
};
