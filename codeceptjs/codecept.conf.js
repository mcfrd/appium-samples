// If your are using a self-signed certificate
process.env['STRICT_SSL'] = 'false';

exports.config = {
  tests: './*_test.js',
  output: './output',
  helpers: {
    Appium: {
      // protocol: 'https',  // this is optional, add only when https is enabled for the connection.
      host: 'hpmc.server',
      port: 8080,
      platform: 'Android',
      // url: "https://github.com/", // not working for Appium.
      capabilities: {
        insecure: true,
        platformName: 'Android',
        deviceName: 'Nexus 6',
        // for UFT Mobile prior to 3.2, use userName and password
        userName: 'admin@default.com',
        password: 'Hpmc54321',
        // for UFT Mobile 3.2 and newer, use oauthClientId and oauthClientSecret
        // oauthClientId: 'oauth2-DXyUfdFOegMZiduw4JCe@microfocus.com',
        // oauthClientSecret: 'eMua6RJ08hEoDlOB5lUE',
        browserName: 'Chrome',
        proxy: { // See https://codecept.io/helpers/WebDriver/#connect-through-proxy
          "proxyType": "manual",
          "httpProxy": "http://127.0.0.1:8889",
          "sslProxy": "http://127.0.0.1:8889"
        }
      }
    }
  },
  include: {
    I: './steps_file.js'
  },
  bootstrap: null,
  mocha: {},
  name: 'uftm-codeceptjs-appium'
};
