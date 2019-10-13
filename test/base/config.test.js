/* Mocks & Stubs */
const mockEnv = {};
const mockProcessModule = {
	env: mockEnv,
};

jest.mock('process', () => mockProcessModule);

describe('the config', () => {
	beforeEach(() => {
		jest.resetModules();
	});

	test('The env-var NODE_ENV is mapped to config.env', () => {
		mockEnv.NODE_ENV = 'production';
		const { config } = require('../../src/base/config');

		expect(config.env).toEqual('production');
	});

	test('When NODE_ENV is not present config.env is development', () => {
		delete mockEnv.NODE_ENV;
		const { config } = require('../../src/base/config');

		expect(config.env).toEqual('development');
	});

	test('Environment variables are available as config.envVars', () => {
		mockEnv.someVar = Symbol('someVar');
		const { config } = require('../../src/base/config');

		expect(config.envVars).toEqual(mockEnv);
	});
});
