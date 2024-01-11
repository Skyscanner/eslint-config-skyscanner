const { FlatCompat } = require('@eslint/eslintrc');

const noAxios = require('./eslint-plugin-skyscanner-no-axios');

const config = require('./index');

const compat = new FlatCompat({});

module.exports = [
  ...compat.config(config),
  {
    ignores: ['test'],
    plugins: { 'skyscanner-no-axios': noAxios },
    rules: {
      'skyscanner-no-axios/no-axios': 'error',
    },
  },
];
