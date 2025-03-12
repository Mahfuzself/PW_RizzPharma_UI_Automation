// global-setup.ts
import { chromium, Browser, webkit } from 'playwright';
// global.d.ts or a similar file in your project
export default async function globalSetup() {
  // Launch the browser before the tests start
  const browser: Browser = await chromium.launch({ headless: true });
  browser.close();

  // Optionally, you can store the browser instance globally for later use in the teardown
  // globalThis.__BROWSER__ = browser;
}
