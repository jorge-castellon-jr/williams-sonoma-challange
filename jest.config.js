module.exports = {
  setupFilesAfterEnv: ['<rootDir>/test/jest.setup.js'],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/$1',
    '^~/(.*)$': '<rootDir>/$1',
    '^vue$': 'vue/dist/vue.common.js',
    'vuetify/lib(.*)': '<rootDir>/node_modules/vuetify/es5$1',
  },
  moduleFileExtensions: ['js', 'vue', 'json'],
  transform: {
    '^.+\\.js$': 'babel-jest',
    '.*\\.(vue)$': 'vue-jest',
  },
  transformIgnorePatterns: ['<rootDir>/node_modules/(?!(vuetify)/)'],
  collectCoverage: true,
  collectCoverageFrom: [
    '<rootDir>/components/**/*.vue',
    '<rootDir>/pages/**/*.vue',
  ],
}
