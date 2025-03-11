import { BrowserContext, Page, expect } from "@playwright/test";
import { Helper } from "./Helper";
//import { Helper } from "./helper";
const fs = require('fs');

export default class WebHelper extends Helper{
    readonly webPage: Page;
  // readonly browserContext: BrowserContext;

  constructor(webPage: Page) {
    super();
    this.webPage = webPage;
    // this.browserContext = browserContext;
  }

async uploadFile(
    filePath: string,fileUploadLocator: string,uploadBtnLocator: string)
  {
    if (!fs.existsSync(filePath)) {
      console.log(`File ${filePath} does not exist`);
      throw new Error(`File not found :${filePath}`);
    }

    await this.webPage.setInputFiles(`${fileUploadLocator}`, filePath);
    await this.webPage.locator(`${uploadBtnLocator}`).click();
  }
}