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
    'plugin:import/recommended'
  ],
  settings: {
    'import/resolver': {
      typescript: {
        project: [
          '**/*/tsconfig.json',
          'tsconfig.json'
        ]
      },
    },
  },
  rules: {
    'prettier/prettier': 'error',
    'no-extra-semi': 'off',
    '@typescript-eslint/no-extra-semi': 'off',
  },
}
