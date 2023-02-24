module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  env: {
    es6: true,
    node: true,
  },
  plugins: [
    '@typescript-eslint/eslint-plugin',
    'import',
    'prettier',
  ],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/recommended',
    'plugin:import/typescript',
  ],
  rules: {
    'prettier/prettier': 'error',
    'no-extra-semi': 'off',
    '@typescript-eslint/no-extra-semi': 'off',
    "import/no-unresolved": ["error", { "ignore": ["\\.js$"] } ],
  },
}
