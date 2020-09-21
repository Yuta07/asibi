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
    ecmaVersion: 7,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
      modules: true,
    },
  },
  extends: [
    'react-app',
    'plugin:react-app/recommended',
    'plugin:react-hooks/recommended',
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
    'prettier/@typescript-eslint',
  ],
  plugins: ['@typescript-eslint', 'prettier', 'react', 'react-hooks'],
  rules: {
    'react/react-in-jsx-scope': 'off',
    '@typescript-eslint/no-namespace': 'error',
    '@typescript-eslint/no-require-imports': 'warn',
    '@typescript-eslint/no-unused-vars': 'error',
    '@typescript-eslint/prefer-for-of': 'warn',
  },
  settings: {
    react: {
      version: 'detect', // detect the version of React to use
    },
  },
};
