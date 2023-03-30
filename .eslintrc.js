module.exports = {
	root: true,
	env: {
		browser: true,
		es6: true,
		jest: true,
		node: true,
	},
	parser: '@typescript-eslint/parser',
	parserOptions: {
		project: './tsconfig.json',
		ecmaVersion: 7,
		sourceType: 'module',
		ecmaFeatures: {
			jsx: true,
			modules: true,
		},
	},
	extends: [
		'eslint:recommended',
		'plugin:react/recommended',
		'plugin:react-hooks/recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:@typescript-eslint/eslint-recommended',
		'plugin:@typescript-eslint/recommended-requiring-type-checking',
		'plugin:import/recommended',
		'plugin:import/errors',
		'plugin:import/warnings',
		'plugin:import/typescript',
		'prettier',
	],
	ignorePatterns: ['*.config.js'],
	plugins: ['@typescript-eslint', 'react', 'import', 'unused-imports'],
	rules: {
		'import/order': [
			'warn',
			{
				groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index', 'object', 'type'],
				pathGroups: [
					{
						pattern: '@alias/**',
						group: 'parent',
						position: 'after',
					},
				],
				alphabetize: {
					order: 'asc',
				},
				'newlines-between': 'always',
			},
		],
		'unused-imports/no-unused-imports': 'warn',
		'react/no-unknown-property': [
			2,
			{
				ignore: ['jsx'],
			},
		],
		'react/react-in-jsx-scope': 'off',
		'react/prop-types': 'off',
		'react/jsx-sort-props': [
			'warn',
			{
				callbacksLast: true,
				shorthandFirst: false,
				shorthandLast: false,
				ignoreCase: true,
				noSortAlphabetically: false,
				reservedFirst: true,
			},
		],
		'react/no-unescaped-entities': 'off',
		'@typescript-eslint/explicit-module-boundary-types': 'off',
		'@typescript-eslint/no-empty-function': 'off',
		'@typescript-eslint/no-explicit-any': 'off',
		'@typescript-eslint/no-redeclare': 'off',
		'@typescript-eslint/no-namespace': 'error',
		'@typescript-eslint/no-require-imports': 'warn',
		'@typescript-eslint/no-unused-vars': 'off',
		'@typescript-eslint/prefer-for-of': 'warn',
		'@typescript-eslint/no-floating-promises': [
			'warn',
			{
				ignoreIIFE: true,
			},
		],
	},
	settings: {
		react: {
			version: 'detect', // detect the version of React to use
		},
		'import/resolver': {
			node: {
				extensions: ['.js', '.jsx', '.ts', '.tsx'],
			},
			typescript: {
				alwaysTryTypes: true,
			},
		},
	},
}
