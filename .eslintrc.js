module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
  },
  extends: [
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended'
  ],
  env: {
    browser: true,
    node: true,
    commonjs: true,
    es6: true
  },
  settings: {
    react: {
      version: 'detect'
    },
  },
  rules: {
    '@typescript-eslint/indent': ['warn', 2],
    '@typescript-eslint/no-var-requires': 'off'
  }
}
