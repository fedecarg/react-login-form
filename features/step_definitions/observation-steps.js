import { Then } from 'cucumber';
import expect from 'expect';
import driver from '../lib/driver';

Then(/^I should see the title$/, async () => {
  const title = await driver.findElement({ css: 'h1' }).getText();
  const expected = 'Login Form';

  expect(title).toContain(expected);
});

Then(/^I should be signed in$/, async () => {
  const message = await driver.findElement({ css: 'p' }).getText();
  const expected = 'User is logged in!';

  expect(message).toContain(expected);
});
