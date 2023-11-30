const noAxios = require('./rules/no-axios');

module.exports = {
  configs: {
    error: {
      plugins: ['skyscanner-no-axios'],
      rules: {
        'skyscanner-no-axios/no-axios': 'error',
      },
    },
  },
  rules: {
    'no-axios': noAxios,
  },
};
