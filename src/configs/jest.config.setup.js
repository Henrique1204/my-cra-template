module.exports = {
  preset: "ts-jest",
  testPathIgnorePatterns: ["/node_modules/", "/.docz/"],
  transformIgnorePatterns: ["/*.png/"],
  setupFilesAfterEnv: ["<rootDir>/src/tests/setupTests.ts"],
  transform: {
    "^.+\\.(ts|tsx)?$": "ts-jest",
    "^.+\\.(js|jsx)$": "babel-jest",
    "\\.svg": "<rootDir>/src/@mocks/svgMock.js",
  },
  testEnvironment: "jsdom",
  globals: {
    "ts-jest": {
      tsconfig: "jest.tsconfig.json",
    },
  },
  collectCoverage: true,
  collectCoverageFrom: [
    "src/**/*.tsx",
    "!src/**/*.test.tsx",
    "!src/**/*styled.tsx",
    "!src/**/*styled.ts",
  ],
  coverageReporters: ["lcov", "json"],
  moduleNameMapper: {
    "^mocks(.*)$": "<rootDir>/src/@mocks/$1",
    "^types(.*)$": "<rootDir>/src/@types/$1",
    "^templates(.*)$": "<rootDir>/src/templates/$1",
    "^contexts(.*)$": "<rootDir>/src/contexts/$1",
    "^components(.*)$": "<rootDir>/src/components/$1",
    "^assets(.*)$": "<rootDir>/src/core/assets/$1",
    "^features(.*)$": "<rootDir>/src/core/features/$1",
    "^helpers(.*)$": "<rootDir>/src/core/helpers/$1",
    "^services(.*)$": "<rootDir>/src/core/services/$1",
    "^store(.*)$": "<rootDir>/src/core/store/$1",
    "^core(.*)$": "<rootDir>/src/core/$1",
    "^hooks(.*)$": "<rootDir>/src/hooks/$1",
    "^pages(.*)$": "<rootDir>/src/pages/$1",
    "^tests(.*)$": "<rootDir>/src/tests/$1",
    "\\.(jpg|ico|jpeg|png|gif|eot|otf|webp|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
      "<rootDir>/__mocks__/fileMock.js",
    "\\.(css|less)$": "<rootDir>/__mocks__/fileMock.js",
  },
};
