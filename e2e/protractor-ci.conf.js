const config = require("./protractor.conf").config;

config.capabilities = {
  browserName: 'chrome',
  chromeOptions: {
    args: ["--headless" , "--no-sandbox=false", "--disable-gpu"]
  }
};

exports.config = config;
