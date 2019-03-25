import { After, BeforeAll } from 'cucumber';
import driver from '../lib/driver';
import fs from 'fs';
import path from 'path';
import { remove } from 'fs-extra';

const SCREENSHOTS_DIR = 'features/screenshots';

After(async (scenario) => {
  if (scenario.result.status === 'failed') {
    const filename =
      scenario.sourceLocation.uri.replace(/^features\//, '').replace(/\//g, '_') +
      ':' +
      scenario.sourceLocation.line +
      '.png';
    const data = await driver.takeScreenshot();
    if (!fs.existsSync(SCREENSHOTS_DIR)) {
      fs.mkdirSync(SCREENSHOTS_DIR);
    }
    fs.writeFileSync(path.join(SCREENSHOTS_DIR, filename), data, 'base64', () => console.log('screenshot saved'));
  }
});

BeforeAll(async () => {
  await remove(SCREENSHOTS_DIR);
});
