module.exports = {
	preset: 'ts-jest',
	testPathIgnorePatterns: ['/node_modules/', '/.docz/'],
	transformIgnorePatterns: ['/*.png/'],
	setupFilesAfterEnv: ['<rootDir>/src/Tests/setupTests.ts'],
	transform: {
		'^.+\\.(ts|tsx)?$': 'ts-jest',
		'^.+\\.(js|jsx)$': 'babel-jest',
		'\\.svg': '<rootDir>/src/@mocks/svgMock.js',
	},
	testEnvironment: 'jsdom',
	globals: {
		'ts-jest': {
			tsconfig: 'jest.tsconfig.json',
		},
	},
	collectCoverage: true,
	collectCoverageFrom: [
		'src/**/*.tsx',
		'!src/**/*.test.tsx',
		'!src/**/*styled.tsx',
		'!src/**/*styled.ts',
	],
	coverageReporters: ['lcov', 'json'],
	moduleNameMapper: {
		'^mocks(.*)$': '<rootDir>/src/@mocks/$1',
		'^types(.*)$': '<rootDir>/src/@types/$1',
		'^contexts(.*)$': '<rootDir>/src/Contexts/$1',
		'^components(.*)$': '<rootDir>/src/Components/$1',
		'^assets(.*)$': '<rootDir>/src/Core/Assets/$1',
		'^helpers(.*)$': '<rootDir>/src/Core/Helpers/$1',
		'^services(.*)$': '<rootDir>/src/Core/Services/$1',
		'^core(.*)$': '<rootDir>/src/Core/$1',
		'^hooks(.*)$': '<rootDir>/src/Hooks/$1',
		'^pages(.*)$': '<rootDir>/src/Pages/$1',
		'^tests(.*)$': '<rootDir>/src/Tests/$1',
		'\\.(jpg|ico|jpeg|png|gif|eot|otf|webp|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
			'<rootDir>/__mocks__/fileMock.js',
		'\\.(css|less)$': '<rootDir>/__mocks__/fileMock.js',
	},
};
