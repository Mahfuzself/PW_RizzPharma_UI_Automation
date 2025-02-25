// global-teardown.ts
import { Browser } from 'playwright';
declare global {
  interface GlobalThis {
    __BROWSER__: any; // Define the type of __BROWSER__
  }
}

export default async function globalTeardown() {
  
  const browser: Browser = globalThis.__BROWSER__ as any;
  
  if (browser) {
    // Close the browser after the tests have finished
    await browser.close();
  }
  
}
