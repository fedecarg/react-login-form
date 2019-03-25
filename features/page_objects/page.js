import driver from '../lib/driver';

class Page {
  async go(url) {
    await driver.get(url);
  }
}

export default Page;
