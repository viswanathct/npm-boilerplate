import pino from 'pino';
import { config } from './config';

const logger = pino({
	prettyPrint: config.env !== 'production'
		? { colorize: true }
		: false,
});

export {
	logger,
};
