module.exports = {
  root: true,
  extends: ['devextreme/spell-check'],
  overrides: [{
    files: ['*.ts', '*.html'],
    extends: ['devextreme/angular'],
    env: {
      browser: true,
      es6: true,
    },
    rules: {
      '@typescript-eslint/no-floating-promises': [
        'error',
        {
          'ignoreVoid': true
        }
      ],
    },
    parserOptions: {
      project: './tsconfig.json',
      'createDefaultProgram': true,
      'ecmaVersion': 6,
    },
  }]
};
