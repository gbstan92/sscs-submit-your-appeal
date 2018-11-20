const strykerConfiguration = config => {
  config.set({
    testRunner: 'mocha',
    mutator: 'javascript',
    transpilers: [],
    reporter:
      [
        'clear-text',
        'progress',
        'html'
      ],
    testFramework: 'mocha',
    coverageAnalysis: 'perTest',
    mutate:
      [
        'steps/check-your-appeal/*.js',
        '!test/unit/steps/check-your-appeal/*.test.js'
      ],
    files: ['**/*'],
    maxConcurrentTestRunners: 2,
    symlinkNodeModules: false,
    htmlReporter: { baseDir: 'functional-output/mutation-steps' },
    mochaOptions: {
      files: ['test/unit/steps/check-your-appeal/*.test.js'],
      timeout: 8000
    },
    logLevel: 'debug',
    plugins:
      [
        'stryker-mocha-runner',
        'stryker-mocha-framework',
        'stryker-javascript-mutator',
        'stryker-html-reporter'
      ],
    runtimeArgs: ['--max-old-space-size=4096']
  });
};

module.exports = strykerConfiguration;