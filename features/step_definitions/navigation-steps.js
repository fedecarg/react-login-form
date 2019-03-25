import { Given } from 'cucumber';
import driver from '../lib/driver';

Given(/^I am at "(.*)" page$/, async (page) => {
  const pages = { SignIn: 'http://localhost:3000/sign-in' };
  const link = pages[page.replace(' ', '')];

  await driver.get(link);
});
