const base = require('./karma.conf.js');

module.exports = function (config) {
  base(config);
  config.set({
    browsers: ['ChromeHeadlessCI'],
    customLaunchers: {
      ChromeHeadlessCI: {
        base: 'ChromeHeadless',
        flags: ['--no-sandbox', '--disable-gpu', '--disable-dev-shm-usage']
      }
    },
    singleRun: true,
    autoWatch: false,
    failOnEmptyTestSuite: false
  });
};
