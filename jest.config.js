module.exports = {
  preset: '@vue/cli-plugin-unit-jest/presets/typescript-and-babel',
  moduleFileExtensions: [
    'js',
    'ts',
    'vue',
  ],
  moduleNameMapper: {
    'vuetify/lib(.*)': '<rootDir>/node_modules/vuetify/es5$1',
    '^.+\\.(css|sass)$': '<rootDir>/tests/__mocks__/scssConfig.ts',
    '^@/(.*)$': '<rootDir>/src/$1'
  },
  transform: {
    "^.+\\.tsx?$": "ts-jest",
    "^.+\\.jsx?$": "babel-jest"
  },
  modulePaths: [
    '<rootDir>'
  ],
}
