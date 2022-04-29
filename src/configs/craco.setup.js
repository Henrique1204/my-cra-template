const path = require('path');

module.exports = () => {
	return {
		babel: {
			plugins: ['transform-inline-environment-variables'],
		},
		webpack: {
			alias: {
				types: path.resolve(__dirname, 'src/@types'),
				mocks: path.resolve(__dirname, 'src/@mocks'),
				components: path.resolve(__dirname, 'src/Components'),
				assets: path.resolve(__dirname, 'src/Core/Assets'),
				constants: path.resolve(__dirname, 'src/Core/Constants'),
				helpers: path.resolve(__dirname, 'src/Core/Helpers'),
				services: path.resolve(__dirname, 'src/Core/Services'),
				hooks: path.resolve(__dirname, 'src/Hooks'),
				contexts: path.resolve(__dirname, 'src/Contexts'),
				pages: path.resolve(__dirname, 'src/Pages'),
				tests: path.resolve(__dirname, 'src/Tests'),
			},
		},
	};
};
