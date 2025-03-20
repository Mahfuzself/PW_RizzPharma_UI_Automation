// import { defineConfig, devices } from '@playwright/test';
import type { PlaywrightTestConfig } from '@playwright/test';
import ENV from 'utils/env';

const config: PlaywrightTestConfig = {
  testDir: './tests',
  testMatch: [
    "login.test.ts",
    "register.test.ts",
    "checkout.test.ts",
    "category.test.ts",
    "home.test.ts",
    // Add more tests as needed
  ],
  fullyParallel: true,
  retries: process.env.CI ? 1 : 0,
  workers: process.env.CI ? 1 : 1,
  timeout: 1 * 30 * 10000,
  reporter: [
    ['list'],
    // ['json', {  outputFile: 'test-results.json' }],
    ['html', { outputFolder: 'playwright-report', open: 'always' }],
   [ './customReport.ts'],
   ["allure-playwright"]
  ],
  // globalTeardown: require.resolve("./mailer.js"),
  use: {
    actionTimeout: 10 * 6000,
    navigationTimeout: 30 * 7000,
    baseURL: ENV.BASE_URL,
    trace: 'on-first-retry',
    launchOptions: {
      args: [
        // Add any necessary browser flags
      ],
      slowMo: 100,  // Optional: slow down the execution for debugging
    },
    permissions: ["microphone", "camera","clipboard-read", "clipboard-write"],
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
  // projects: [
  //   {
  //     name: 'Desktop Safari',
  //     use: {
  //       browserName: 'webkit',
  //       ...devices['Desktop Safari'],
  //     },
  //   }
    // {
    //   name: 'chromium',
    //   use: {
    //     ...devices['Desktop Chrome'],
    //   },
    // },
    // {
    //   name: 'Mobile Safari',
    //   use: {
    //     ...devices['iPhone 13'],
    //   },
    // },
  // ],
  // globalSetup: require.resolve('./global-setup.ts'),  // Set the global setup script
  // globalTeardown: require.resolve('./global-teardown.ts'),  // Set the global teardown script
};

export default config;
