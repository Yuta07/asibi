const nextJest = require('next/jest')

const createJestConfig = nextJest({
	dir: './',
})

const customJestConfig = {
	preset: 'ts-jest',
	testEnvironment: 'jest-environment-jsdom',
	roots: ['<rootDir>'],
	testMatch: ['**/?(*.)+(spec|test).+(ts|tsx|js|jsx)'],
	testPathIgnorePatterns: ['<rootDir>/node_modules/', '<rootDir>/.next/'],
	transform: {
		'^.+\\.(ts|tsx)$': 'ts-jest',
	},
	moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
	moduleNameMapper: {
		'^@/(.*)$': '<rootDir>/$1',
	},
	setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
	verbose: true,
	globals: {
		'ts-jest': {
			tsconfig: 'tsconfig.jest.json',
		},
	},
}

module.exports = createJestConfig(customJestConfig)
