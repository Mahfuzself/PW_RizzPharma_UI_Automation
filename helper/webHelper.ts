import { BrowserContext, Page, expect } from "@playwright/test";
import { Helper } from "./Helper";
//import { Helper } from "./helper";
const fs = require('fs');

export default class WebHelper extends Helper{
    // static uploadFile(uploadFile: (filePath: "D:SQARLAutomationPW_RizzPharma_UI_Automation\testDataimagesFront.png", fileUploadLocator: "//button[normalize-space(text())='Upload Documents']", uploadBtnLocator: "//span[normalize-space(text())='Browse Files']") => Promise<void>) {
    //     throw new Error('Method not implemented.');
    // }
    readonly webPage: Page;
  // readonly browserContext: BrowserContext;

  constructor(webPage: Page) {
    super();
    this.webPage = webPage;
    // this.browserContext = browserContext;
  }
      Common_Elements  ={
        AddToCart:"//span[normalize-space(text())='Add to Cart']",
        
        
        

      }

async uploadFile(filePath: string,fileUploadLocator: string,uploadBtnLocator: string)
  {
    // if (!fs.existsSync(filePath)) {
    //   console.log(`File ${filePath} does not exist`);
    //   throw new Error(`File not found :${filePath}`);
    // }
    // await this.webPage.waitForSelector(uploadBtnLocator);
    await this.webPage.locator(uploadBtnLocator).click();
   await this.webPage.waitForTimeout(3000)
    await this.webPage.setInputFiles(fileUploadLocator, filePath);
    // await this.webPage.locator(`${fileUploadLocator}`).click();
  }
  async clickAddToCartAndHandleDosage(): Promise<void> {
    try {
        // Click the "Add to Cart" button
        const addToCartLocator = this.Common_Elements.AddToCart;
        await this.webPage.waitForSelector(addToCartLocator, { timeout: 5000 });
        const addToCartElement = await this.webPage.locator(addToCartLocator);
        await addToCartElement.focus();
        await addToCartElement.click();
        console.log("Clicked on 'Add to Cart' button successfully.");
        await this.webPage.waitForTimeout(3000);
        // Check if the dosage selection modal appears
        const dosageModalLocator = "//div[@id='product-preview-dose-modal']/div[1]/div[1]";//p[text()="Select Dosage"]
        const isDosageModalVisible = await this.webPage.isVisible(dosageModalLocator);

        if (isDosageModalVisible) {
            console.log("Dosage selection modal is visible. Handling dosage selection...");

            // Select a dose (e.g., multiple dose)
            const multipleDoseLocator = "(//span[@class='dose-radio__label'])[1]";
            await this.webPage.waitForSelector(multipleDoseLocator, { timeout: 5000 });
            const multipleDoseElement = await this.webPage.locator(multipleDoseLocator);
            await multipleDoseElement.click();
            console.log("Selected multiple dose option.");

            // Click the "Confirm" button
            const confirmButtonLocator = "(//button[normalize-space(text())='Confirm'])[2]";
            await this.webPage.waitForSelector(confirmButtonLocator, { timeout: 5000 });
            const confirmButtonElement = await this.webPage.locator(confirmButtonLocator);
            await confirmButtonElement.click();
            console.log("Clicked on 'Confirm' button successfully.");
        // } else {
        //     console.log("Dosage selection modal is not visible. Proceeding to click 'I Agree'...");

        //     // Click the "I Agree" button
        //     const iAgreeButtonLocator = "//button[normalize-space(text())='I Agree']";
        //     await this.webPage.waitForSelector(iAgreeButtonLocator, { timeout: 5000 });
        //     const iAgreeButtonElement = await this.webPage.locator(iAgreeButtonLocator);
        //     await iAgreeButtonElement.click();
        //     console.log("Clicked on 'I Agree' button successfully.");
        // }
    }
}
  catch (error) {
    throw new Error(`Homepage >> Add to Cart is not functional >> Failed: ${error}`);
  }
  }
  async clickNoThanksIfVisible(): Promise<void> {
    await this.webPage.waitForTimeout(3000); // Wait for 3 seconds before checking for the button
    try {
        const noThanksButtonLocator = "//button[normalize-space(text())='No Thanks']";

        // Check if the "No Thanks" button is visible
        const isButtonVisible = await this.webPage.isVisible(noThanksButtonLocator);

        if (isButtonVisible) {
            console.log("'No Thanks' button is visible. Clicking it...");
            await this.webPage.click(noThanksButtonLocator, { timeout: 5000 });
            console.log("Clicked on 'No Thanks' button successfully.");
        } else {
            console.log("'No Thanks' button is not visible. Proceeding without interaction...");
        }
    } catch (error) {
        throw new Error(`Homepage >> No Thanks Button >> Failed to handle 'No Thanks' button: ${error}`);
    }
}
}