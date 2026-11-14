// Configuración de Karma para CI: Chrome sin interfaz y sin sandbox (runners de GitHub).
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
    autoWatch: false
  });
};
