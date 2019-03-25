import { BeforeAll, AfterAll, setDefaultTimeout } from 'cucumber';
import { createDriver, stopDriver } from '../lib/driver';

setDefaultTimeout(60 * 1000);

BeforeAll(async () => {
  await createDriver();
});

AfterAll(async () => {
  await stopDriver();
});
