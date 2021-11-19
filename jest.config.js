module.exports = {
  preset: '@vue/cli-plugin-unit-jest/presets/typescript-and-babel',
  moduleNameMapper: {
    'vuetify/lib(.*)': '<rootDir>/node_modules/vuetify/es5$1',
    '^.+\\.(css|sass)$': '<rootDir>/tests/__mocks__/scssConfig.ts'
  }
}
