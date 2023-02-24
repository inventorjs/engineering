module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  env: {
    es6: true,
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  plugins: ['import', 'prettier'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/recommended',
  ],
  rules: {
    'prettier/prettier': 'error',
    'no-extra-semi': 'off',
  },
}
