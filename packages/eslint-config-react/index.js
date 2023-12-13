module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  env: {
    es6: true,
    browser: true,
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  plugins: ['prettier', '@typescript-eslint/eslint-plugin'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended'
  ],
  rules: {
    'prettier/prettier': 'error',
    'no-extra-semi': 'off',
    '@typescript-eslint/no-extra-semi': 'off',
    '@typescript-eslint/no-unused-vars': [
      1,
      {
        argsIgnorePattern: '^_'
      },
    ],
    'react/react-in-jsx-scope': 'off',
  },
}
