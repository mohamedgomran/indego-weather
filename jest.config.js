module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  reporters: [
    'default',
    ['./node_modules/jest-html-reporter', {
      publicPath: './coverage',
      filename: 'report.html',
      pageTitle: 'Test Report'
    }]
  ]
};