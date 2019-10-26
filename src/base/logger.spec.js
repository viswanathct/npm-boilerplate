/* Mocks & Stubs */
const mockConfigModule = {};
const mockPino = jest.fn();

/* Helpers */
const forceRequire = (module) => {
	jest.unmock(module);
	return require(module);
}

jest.mock('./config', () => ({
	config: mockConfigModule,
}));
jest.mock('pino', () => mockPino);

describe('the logger', () => {
	test('When the environment is production the logger'
		+ ' doesn\'t prettyPrint.', () => {
		mockConfigModule.environment = 'production';

		forceRequire('./logger');

		expect(mockPino).toBeCalledWith({
			prettyPrint: false,
		});
	});

	test('When the environment is not production the logger'
		+ ' does prettyPrint.', () => {
		mockConfigModule.environment = 'development';

		forceRequire('./logger');

		expect(mockPino).toBeCalledWith({
			prettyPrint: {
				colorize: true,
			},
		});
	});
});
