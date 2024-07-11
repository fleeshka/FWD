module.exports = {
    parser: '@typescript-eslint/parser',
    extends: [
      'eslint:recommended',
      'plugin:react/recommended',
      'plugin:@typescript-eslint/recommended',
      'plugin:prettier/recommended'
    ],
    settings: {
      react: {
        version: 'detect'
      }
    },
    parserOptions: {
      ecmaFeatures: {
        jsx: true
      },
      ecmaVersion: 2020,
      sourceType: 'module'
    },
    rules: {
      // ваши правила ESLint
    },
    env: {
      browser: true,
      es2021: true,
      node: true
    }
  };
  