/* The main entry. */

import { log } from 'util';
import { config } from './config';

/* Tasks */
const main = () => {
	log('Starting with config:');
	log(JSON.stringify(config));
};

export {
	main,
};
