module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
  },
  extends: [
    'airbnb-base',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
  },
  rules: {
    'no-extend-native': ['error', { exceptions: ['Array'] }],
    'no-underscore-dangle': 0,
    'no-shadow': 0,
    'prefer-destructuring': 0,
    'no-param-reassign': 0,
    'consistent-return': 0,
    'no-cond-assign': 0,
    'guard-for-in': 0,
    'no-restricted-syntax': 0,
    'no-continue': 0,
  },

};
