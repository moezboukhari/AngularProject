const config = require('./protractor.conf').config;

config.capabilities = {
  browserName: 'firefox',
  chromeOptions: {
    args: ['--headless', '--no-sandbox', '--disable-gpu']
  }
};

exports.config = config;
