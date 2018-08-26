module.exports = {
  parserOptions: {
    ecmaVersion: 6
  },
  rules: {
    indent: ['error', 2],
    quotes: ['error', 'single'],
    semi: ['error', 'always'],
    'comma-dangle': ['error', 'never'],
    'operator-linebreak': ['error', 'before']
  },
  globals: {
    angular: true
  }
};
