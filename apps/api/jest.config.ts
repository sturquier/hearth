export default {
  moduleFileExtensions: ['js', 'json', 'ts'],
  rootDir: '.',
  testEnvironment: 'node',
  testRegex: '.*\\.spec\\.ts$',
  transform: {
    '^.+\\.(t|j)s$': 'ts-jest',
  },
  moduleNameMapper: {
    '^@hearth/api/(.*)$': '<rootDir>/src/$1',
    '^@hearth/shared-(.*)$': '<rootDir>/../../packages/shared-$1/src',
  },
};
