/* The main entry. */

import { log } from 'util';
import { config } from './config';

/* Tasks */
const main = () => {
	log(`Starting in ${ config.env } environment.`);
};

export {
	main,
};
