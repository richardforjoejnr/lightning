module.exports = {
    root: true,
    env: {
      browser: true,
      es6: true,
      node: true,
      jest: true,
      commonjs: false,
    },
    globals: {
      'lng': true,
    },
    plugins: ['prettier'],
    extends: ['eslint:recommended', 'plugin:prettier/recommended', 'prettier'],
    rules: {
      quotes: [2, 'single', 'avoid-escape'],
      'no-extra-boolean-cast': 'off',
      'no-unused-vars': 'off',
      'prettier/prettier': [
        'error',
        {
          trailingComma: 'es5',
          singleQuote: true,
          tabWidth: 2,
          printWidth: 999,
        },
      ],
    },
    parser: 'babel-eslint',
    parserOptions: {
      ecmaVersion: 2018,
      sourceType: 'module',
    },
  };
  