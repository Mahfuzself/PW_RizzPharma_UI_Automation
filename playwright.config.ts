
import { defineConfig,devices } from '@playwright/test';
import type { PlaywrightTestConfig } from '@playwright/test';
var date = new Date();
var ReportDate = date.getFullYear() + ("0" + (date.getMonth() + 1)).slice(-2) + ("0" + date.getDate()).slice(-2) + ("0" + date.getHours()).slice(-2) + ("0" + date.getMinutes()).slice(-2) + ("0" + date.getSeconds()).slice(-2);


/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// require('dotenv').config();

/**
 * See https://playwright.dev/docs/test-configuration.
 */
const config: PlaywrightTestConfig = {
  testDir: './tests',
  testMatch: [
     "login.test.ts",
  //  "alignwelluser.test.ts",
  //  "contractor.test.ts",
  //  "healthcareprovider.test.ts",
  // "broker.test.ts",
  //  "company.test.ts",
  //  "vendoradmin.test.ts",
    // "Events.test.ts",
  //  "employeeuser.test.ts",
  //  "usermanagement/Contractor.test.ts",
  // "usermanagement/healthcareprovider.test.ts",
  //  "usermanagement/alignuser/masteradmin.test.ts",
  // "usermanagement/alignuser/standard.test.ts",
  // "PortalTest/vendor.test.ts",
  


  ],
  
  fullyParallel: true,
  retries: process.env.CI ? 1 : 0,
  workers: process.env.CI ? 1 : 1,

  // reporter: process.env.CI ? [["junit", {
  //   outputFile: "results.xml"
  // }]] : [["json", {
  //   outputFile: "report.json"
  // }], ["html", {
  //   open: "never"
  // }]],

  // reporter: [ ["experimental-allure-playwright"]],



  // reporter: [["html", {
  //   open: "never"
  // }], ["allure-playwright"], ['./My-Reporter.js']],

  // globalTeardown: require.resolve("./mailer.js"),



  use: {
    actionTimeout: 10 * 6000,
    navigationTimeout: 30 * 7000,
    baseURL:"https://rizzpharma.thrivewellrx.com/",
    launchOptions: {
      args: [
        // '--use-fake-device-for-media-stream',
        // '--use-fake-ui-for-media-stream',
        // '--no-sandbox',
        // '--disable-features=UseOzonePlatform',
        // `--use-file-for-fake-video-capture=${__dirname}/mobile.y4m`
      ],
      slowMo: 100

    },
    permissions: ["microphone", "camera", "clipboard-read", "clipboard-write"],
    headless: process.env.CI ? true : false,
    browserName: 'chromium',
    channel: 'chrome',
    screenshot :'only-on-failure',
    viewport: { width: 1520, height: 780 },
    ignoreHTTPSErrors: true,

    //  permissions: ["camera"],


    // actionTimeout: 2 * 60 * 1000,
    // trace: process.env.CI ? "off" : "off",
    // video: process.env.CI ? "off" : "off",
    // screenshot: process.env.CI ? "off" : "on",
  },
  // retries : 1,
  // workers : 1,
  timeout: 1 * 30 * 10000,
  //reporter :"experimental-allure-playwright",
  expect: {
    timeout: 6000

  },




  // projects: [
  //   {
  //     name: 'chromium',
  //     use: {
  //       ...devices['Desktop Chrome'],
  //     }
  //   // },

  //   // {
  //   //   name: 'firefox',
  //   //   use: {
  //   //     ...devices['Desktop Firefox'],channel:'firefox',
  //   //   },
  //   // },
  // // {
  // //   name: 'MSEdge',
  // //   use: { ...devices['Desktop Edge'], channel: 'msedge' ,
  // // } // or "msedge-beta" or 'msedge-dev'

  // },
   
  // ]
//   // reporter: [ ["html"], { outputFolder: ('./playwright-report/'+ ReportDate)}]
//   // retries : 1,
//   // workers : 2


};

export default config;
