import { When } from 'cucumber';
import driver from '../lib/driver';

When(/^I enter email and password$/, async () => {
  const email = await driver.findElement({ css: '#email' });
  const password = await driver.findElement({ css: '#password' });

  await email.sendKeys('test');
  await password.sendKeys('test');
});

When(/^I submit "(.*)" request$/, async () => {
  const button = await driver.findElement({ css: 'button' });
  await button.click();
});
