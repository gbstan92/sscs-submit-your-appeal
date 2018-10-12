/* eslint-disable no-process-env */

const config = require('config');
const fileAcceptor = require('test/file_acceptor');
const supportedBrowsers = require('./crossbrowser/supportedBrowsers.js');
const { Logger } = require('@hmcts/nodejs-logging');

const logger = Logger.getLogger('saucelabs.conf.js');
const evidenceUploadEnabled = config.get('features.evidenceUpload.enabled');
const tunnelName = process.env.SAUCE_TUNNEL_IDENTIFIER || config.get('saucelabs.tunnelId');

const getBrowserConfig = browserGroup => {
  const browserConfig = [];
  for (const candidateBrowser in supportedBrowsers[browserGroup]) {
    if (candidateBrowser) {
      const desiredCapability = supportedBrowsers[browserGroup][candidateBrowser];
      desiredCapability.tunnelIdentifier = tunnelName;
      desiredCapability.tags = ['sscs'];
      browserConfig.push({
        browser: desiredCapability.browserName,
        desiredCapabilities: desiredCapability
      });
    } else {
      logger.error('supportedBrowsers.js is empty or incorrectly defined');
    }
  }
  return browserConfig;
};

const pauseFor = seconds => {
  setTimeout(() => {
    return true;
  }, seconds * 1000);
};

const setupConfig = {
  tests: './**/*.test.js',
  output: process.cwd() + config.get('saucelabs.outputDir'),
  features: {
    evidenceUpload: {
      enabled: evidenceUploadEnabled
    }
  },
  helpers: {
    WebDriverIO: {
      url: process.env.TEST_URL || config.get('e2e.frontendUrl'),
      browser: process.env.SAUCE_BROWSER || config.get('saucelabs.browser'),
      waitForTimeout: parseInt(config.get('e2e.waitForTimeout')),
      smartWait: parseInt(config.get('saucelabs.smartWait')),
      cssSelectorsEnabled: 'true',
      host: 'ondemand.saucelabs.com',
      port: 80,
      user: process.env.SAUCE_USERNAME || config.get('saucelabs.username'),
      key: process.env.SAUCE_ACCESS_KEY || config.get('saucelabs.key'),
      desiredCapabilities: {}
    },
    MyHelper: {
      require: './helpers/helper.js',
      url: config.get('e2e.frontendUrl')
    },
    SauceLabsReportingHelper: { require: './helpers/SauceLabsReportingHelper.js' }
  },
  include: {
    I: './page-objects/steps.js'
  },
  bootstrapAll: done => {
    fileAcceptor.bootstrap(done);
  },
  teardownAll: done => {
    // Pause to allow SauceLabs to finish updating before Jenkins queries it for results
    logger.info('Wait for 30 seconds before Jenkins queries SauceLabs results...');
    pauseFor(30);
    fileAcceptor.teardown(done);
  },
  mocha: {
    reporterOptions: {
      'codeceptjs-cli-reporter': {
        stdout: '-',
        options: { steps: true }
      },
      mochawesome: {
        stdout: './functional-output/console.log',
        options: {
          reportDir: `.${config.get('saucelabs.outputDir')}`,
          reportName: 'index',
          inlineAssets: true
        }
      }
    }
  },
  multiple: {
    chrome: {
      browsers: getBrowserConfig('chrome')
    },
    firefox: {
      browsers: getBrowserConfig('firefox')
    }
  },
  name: 'Submit Your Appeal Crossbrowser Tests'
};

exports.config = setupConfig;