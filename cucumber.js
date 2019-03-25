process.env.NODE_ENV = 'test';

module.exports = {
  default: [
    '--require-module @babel/register',
    '--require-module @babel/polyfill',
    '--format ./node_modules/cucumber-pretty',
  ].join(' '),
};
