module.exports = {
    env: {
      browser: true,
      es6: true,
    },
    extends: ['airbnb-base', 'plugin:@typescript-eslint/recommended'],
    parser: '@typescript-eslint/parser',
    parserOptions: {
      ecmaVersion: 2018,
      sourceType: 'module',
    },
    plugins: ['@typescript-eslint'],
    rules: {
      'import/extensions': [
        'error',
        'ignorePackages',
        {
          ts: 'never',
        },
      ],
    },
    settings: {
      'import/resolver': {
        node: {
          extensions: ['.ts'],
        },
      },
    },
  };
