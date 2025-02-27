import { defineConfig } from '@playwright/test';
import type { PlaywrightTestConfig } from '@playwright/test';

const config: PlaywrightTestConfig = {
  testDir: './tests',
  testMatch: [
    "login.test.ts",
    "register.test.ts",
    "checkout.test.ts"
    // Add more tests as needed
  ],
  fullyParallel: true,
  retries: process.env.CI ? 1 : 0,
  workers: process.env.CI ? 1 : 1,
  timeout: 1 * 30 * 10000,
  // globalTeardown: require.resolve("./mailer.js"),
  use: {
    actionTimeout: 10 * 6000,
    navigationTimeout: 30 * 7000,
    baseURL: "https://rizzpharma.thrivewellrx.com/",
    launchOptions: {
      args: [
        // Add any necessary browser flags
      ],
      slowMo: 100,  // Optional: slow down the execution for debugging
    },
    permissions: ["microphone", "camera", "clipboard-read", "clipboard-write"],
    headless: process.env.CI ? true : false,
    browserName: 'chromium',
    channel: 'chrome',
    
    screenshot: 'only-on-failure',
    viewport: { width: 1520, height: 780 },
    ignoreHTTPSErrors: true,
  },
  expect: {
    timeout: 6000,
    
  },
  // export default defineConfig({
  //   globalSetup: './global-setup',
  // });
  globalSetup: require.resolve('./global-setup'),  // Set the global setup script
  globalTeardown: require.resolve('./global-teardown'),  // Set the global teardown script
};

export default config;
