const {
  BROWSERSTACK_USERNAME,
  BROWSERSTACK_ACCESS_KEY,
  CIRCLE_BRANCH,
  CIRCLE_BUILD_NUM
} = process.env;

const defaultCapabilities = {
  project: 'Login Form',
  build: CIRCLE_BRANCH,
  name: `${CIRCLE_BRANCH}/${CIRCLE_BUILD_NUM}`,
  'browserstack.debug': 'true',
  'browserstack.video': 'true',
  'browserstack.local': true,
};

exports.config = {
  user: BROWSERSTACK_USERNAME,
  key: BROWSERSTACK_ACCESS_KEY,
  server: 'hub-cloud.browserstack.com',

  capabilities: [{
    ...defaultCapabilities,
    os: 'Windows',
    os_version: '10',
    browser: 'Chrome',
    browserName: 'Chrome',
    browser_version: '68.0',
  }, ],
};