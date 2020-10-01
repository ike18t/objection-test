module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  collectCoverageFrom: ['./**/*.{js,ts}'],
  coveragePathIgnorePatterns: ['/node_modules/', '/coverage/', '/dist/', '.config.js'],
  setupFilesAfterEnv: ['./jest.setup.ts'],
  resetMocks: true,
  resetModules: true,
}
