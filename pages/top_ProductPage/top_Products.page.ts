import {Page,expect} from '@playwright/test';
export default class top_productsPage{
    private page: Page;
    constructor(page: Page) {
        this.page = page;
    }
    private top_productsElementPage={
          Semaglutide :'//li//a[text()="Semaglutide (GLP-1) Injection"]',
          Sildanafil:'//li//a[text()="Sildenafil"]'

    }
    async clickSemaglutide(): Promise<void> {
        try {
            const semaglutideLocator = this.top_productsElementPage.Semaglutide;
    
            // Wait for the "Semaglutide" element to be visible
            await this.page.waitForSelector(semaglutideLocator, { timeout: 5000 });
    
            // Click the "Semaglutide" element
            await this.page.click(semaglutideLocator);
            console.log("Clicked on 'Semaglutide (GLP-1) Injection' successfully.");
            await this.page.waitForTimeout(3000);
        } catch (error) {
            throw new Error(`Top Products Page >> Semaglutide >> 'Semaglutide (GLP-1) Injection' is not clickable: ${error}`);
        }
    }
    async clickSildenafil(): Promise<void> {
        try {
            const SildenafilLocator = this.top_productsElementPage.Sildanafil;
    
            // Wait for the "Semaglutide" element to be visible
            await this.page.waitForSelector(SildenafilLocator, { timeout: 5000 });
    
            // Click the "Semaglutide" element
            await this.page.click(SildenafilLocator);
            console.log("Clicked on 'Sildenafil' successfully.");
        } catch (error) {
            throw new Error(`Top Products Page >> Sildenafil >> 'Sildenafil' is not clickable: ${error}`);
        }
    }
    async clickTopProductsDropDown(): Promise<void> {
        try {
            const topProductsButtonLocator = "//button[normalize-space(text())='Top Products']";
    
            // Wait for the "Top Products" button to be visible
            await this.page.waitForSelector(topProductsButtonLocator, { timeout: 5000 });
    
            // Click the "Top Products" button
            await this.page.click(topProductsButtonLocator);
            console.log("Clicked on 'Top Products' button successfully.");
        } catch (error) {
            throw new Error(`Homepage >> Top Products Button >> 'Top Products Drop down' button is not clickable: ${error}`);
        }
    }
    //button[normalize-space(text())='Top Products']
}