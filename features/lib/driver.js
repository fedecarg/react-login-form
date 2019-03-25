import 'chromedriver';
import { Builder } from 'selenium-webdriver';
import chrome from 'selenium-webdriver/chrome';
import browserstack from 'browserstack-local';
import { config } from '../conf/browserstack.conf';

const { USE_BROWSERSTACK, DEBUG } = process.env;

let driverInstance;
let bsLocal;

const createBrowserstackDriver = async () => {
  const { user, key, server, 'browserstack.localIdentifier': localIdentifier, capabilities } = config;

  bsLocal = new browserstack.Local();
  const bsOpts = { key, verbose: 'true', force: 'true', forceLocal: true, localIdentifier };

  await new Promise((resolve, reject) =>
    bsLocal.start(bsOpts, (error) => {
      if (error) reject(error);
      resolve();
    })
  );

  const caps = capabilities[0];
  caps['browserstack.user'] = user;
  caps['browserstack.key'] = key;

  const driver = new Builder()
    .usingServer(`http://${server}/wd/hub`)
    .withCapabilities(caps)
    .build();

  return driver;
};

const createLocalDriver = async () => {
  const options = new chrome.Options();

  if (!DEBUG) {
    options.headless();
  }

  const driver = new Builder()
    .forBrowser('chrome')
    .setChromeOptions(options)
    .build();

  return driver;
};

export const createDriver = async () => {
  if (driverInstance) return driverInstance;

  const driver = USE_BROWSERSTACK ? await createBrowserstackDriver() : await createLocalDriver();

  driverInstance = driver;

  return driver;
};

export const stopDriver = async () => {
  if (USE_BROWSERSTACK) {
    await new Promise((resolve) => bsLocal.stop(resolve));
  }
  await driver.close();
};

const driver = new Proxy(
  {},
  {
    get(_, prop) {
      if (driverInstance) return driverInstance[prop];
    },
  }
);

export default driver;
