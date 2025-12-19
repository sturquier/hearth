export default {
  moduleFileExtensions: ['js', 'json', 'ts'],
  rootDir: '.',
  testEnvironment: 'node',
  testRegex: '.*\\.spec\\.ts$',
  transform: {
    '^.+\\.(t|j)s$': 'ts-jest',
  },
  moduleNameMapper: {
    '^@/api/(.*)$': '<rootDir>/src/$1',
    '^@/packages/(.*)$': '<rootDir>/../../packages/$1',
  },
};
