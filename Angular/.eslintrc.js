module.exports = {
  root: true,
  extends: ['devextreme/spell-check'],
  overrides: [{
    files: ['*.ts', '*.html', '*.spec.ts'],
    extends: ['devextreme/angular'],
    env: {
      browser: true,
      es6: true,
      jest: true
    },
    parserOptions: {
      project: './tsconfig.json',
      'createDefaultProgram': true,
      'ecmaVersion': 6,
    },
  }]
};
