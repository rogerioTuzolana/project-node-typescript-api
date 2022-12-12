const {resolve} = require('path');
const root = resolve(__dirname);
module.exports = {
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json'],
    rootDir: root,
    displayName: 'root-tests',
    testMatch: ['<rootDir>/src/**/*.test.ts'],
    testEnvironment: 'node',
    clearMocks: true,
    preset: 'ts-jest',
    moduleNameMapper: {
        '@src/(.*)': '<rootDir>/src/$1',
        '@test/(.*)': '<rootDir>/test/$1',
    }
}