const config = require('./protractor.conf').config;

config.capabilities = {
  browserName: 'Firefox',
  moz:firefoxOptions: {
    args: ['--safe-mode' , "--headless"]
  }
};

exports.config = config;
