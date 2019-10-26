/* Mocks & Stubs */
const mockEnv = {};
const mockProcessModule = {
	env: mockEnv,
};

jest.mock('process', () => mockProcessModule);

/* Helpers */
const forceRequire = (module) => {
	jest.unmock(module);
	return require(module);
}

describe('the config', () => {
	test('The env-var NODE_ENV is mapped to config.env.', () => {
		mockEnv.NODE_ENV = 'production';
		const { config } = forceRequire('./config');

		expect(config.environment).toEqual('production');
		delete mockEnv.NODE_ENV;
	});

	test('When NODE_ENV is not present config.env is development.', () => {
		delete mockEnv.NODE_ENV;

		const { config } = forceRequire('./config');

		expect(config.environment).toEqual('development');
	});

	test('Environment variables are available as config.env.', () => {
		mockEnv.someVar = Symbol('someVar');

		const { config } = forceRequire('./config');

		expect(config.env).toEqual(mockEnv);
	});
});
