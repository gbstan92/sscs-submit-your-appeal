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
        'steps/**/*.js'
        // 'steps/check-your-appeal/*.js',
        // '!test/unit/steps/check-your-appeal/*.test.js'
      ],
    // files: ['**/*'],
    maxConcurrentTestRunners: 2,
    symlinkNodeModules: false,
    htmlReporter: { baseDir: 'functional-output/mutation-steps' },
    mochaOptions: {
      files: [
        'test/unit/steps/check-your-appeal/**/*.test.js',
        'test/unit/steps/compliance/**/*.test.js',
        'test/unit/steps/check-your-appeal/**/*.test.js',
        'test/unit/steps/compliance/**/*.test.js',
        'test/unit/steps/confirmation/**/*.test.js',
        'test/unit/steps/entry/**/*.test.js',
        'test/unit/steps/errors/**/*.test.js',
        'test/unit/steps/exit/**/*.test.js',
        'test/unit/steps/hearing/**/*.test.js',
        'test/unit/steps/identity/**/*.test.js',
        'test/unit/steps/reasons-for-appealing/**/*.test.js',
        'test/unit/steps/representative/**/*.test.js',
        'test/unit/steps/session/**/*.test.js',
        'test/unit/steps/sms-notify/**/*.test.js',
        // 'test/unit/steps/start/**/*.test.js',
        // 'test/assets/**/*.test.js'
        // './test/unit/middleware/EvidenceUpload.test.js',
        // './test/unit/steps.test.js',
        // './test/unit/paths.test.js',
        './test/unit/utils/**/*.test.js'
      ],
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