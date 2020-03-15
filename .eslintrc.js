module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  plugins: ['react'],
  globals: {
    graphql: false,
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    project: './tsconfig.json',
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
      jsx: true,
    },
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier/@typescript-eslint',
    'prettier',
    'plugin:prettier/recommended',
  ],
  plugins: ['@typescript-eslint', 'prettier', 'react'],
  rules: {
    rules: {
      '@typescript-eslint/no-namespace': 'error',
      '@typescript-eslint/no-require-imports': 'warn',
      '@typescript-eslint/no-unused-vars': 'error',
      '@typescript-eslint/prefer-for-of': 'warn',
      'react-app/react/react-in-jsx-scope': ['warn'],
    },
  },
};
