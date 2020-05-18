module.exports = {
  extends: 'eslint:recommended',
  globals: {
    document: true,
    console: true,
    module: true,
    require: true,
  },
  env: {
    es6: true,
    node: true,
  },
  overrides: [
    {
      files: [
        '**/*.spec.js',
      ],
      env: {
        jest: true,
      },
    },
  ],
  parserOptions: {
    sourceType: 'module'
  },
  parser: 'babel-eslint',
  rules: {},
  plugins: [],
};
