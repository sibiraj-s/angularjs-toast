module.exports = {
  extends: ['standard'],
  parserOptions: {
    ecmaVersion: 6
  },
  rules: {
    semi: ['error', 'always'],
    'operator-linebreak': ['error', 'before']
  },
  globals: {
    angular: true
  }
};
