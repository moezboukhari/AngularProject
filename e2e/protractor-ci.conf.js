const config = require('./protractor.conf').config;

config.capabilities = {
  browserName: 'Firefox',
  firefoxOptions: {
    args: ["--headless" , '--no-sandbox' , '--disable-gpu']
  }
};
config.capabilities = {
  browserName: 'chrome',
  chromeOptions: {
    args: ['--headless', '--no-sandbox=false', '--disable-gpu']
  }
};

exports.config = config;
