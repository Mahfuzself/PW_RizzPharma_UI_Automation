import { Page } from "playwright";
import { expect } from "@playwright/test";

export default class homePage{
    homepage: Page;
    constructor(homepage: Page) {
        this.homepage = homepage;
    }
    private HomePageElements = {
        findmytreatmentBtn: '//span[text()="Find my treatment"]',
        FindindYourTreatment: "//div[contains(@class,'assessment__title mt-30')]",
        Age_18_29:"//label[normalize-space(text())='18-29']",
        NextBtn :"//button[normalize-space(text())='Next']",
        MaleBtn:"//label[normalize-space(text())='Male']",
        EatingHabits:"//label[normalize-space(text())='I eat whatever is available']",
        SleepHavits:"//label[normalize-space(text())='Not good']",
        EnergyLavel:"//label[normalize-space(text())='Very tired majority of time']",
        ActivityLabel:"(//input[@name='answerRadio104']/following-sibling::label)[1]",
        WeightGoal:"//label[normalize-space(text())='I just need to build a little muscle']",
        OverallGoals_ShredfatLooseWeight:"//label[normalize-space(text())='Shred fat/ Loose Weight']",
        recuringplanText:"//p[contains(.,'Recurring plan')]",
        selectDose:"//p[normalize-space(text())='Select Dosage']", 
        confirmBtn:"//button[normalize-space(text())='Confirm']",
        slot:"(//input[@name='dose']/following-sibling::span)[1]"
      }
      async clickFindMyTreatment(): Promise<void> {
        try {
            await this.homepage.waitForSelector(this.HomePageElements.findmytreatmentBtn, { timeout: 5000 });
            await this.homepage.click(this.HomePageElements.findmytreatmentBtn);
            console.log("Clicked on 'Find My Treatment' button successfully.");
        } catch (error) {
            throw new Error(`Homepage >> Find My Treatment >> Button is not clickable: ${error}`);
        }
    }

    async clickAge18To29(): Promise<void> {
        try {
            await this.homepage.waitForSelector(this.HomePageElements.Age_18_29, { timeout: 5000 });
            await this.homepage.click(this.HomePageElements.Age_18_29);
            console.log("Clicked on '18-29' age group successfully.");
        } catch (error) {
            throw new Error(`Homepage >> Age Group >> '18-29' is not clickable: ${error}`);
        }
    }

    async clickNext(): Promise<void> {
        try {
            await this.homepage.waitForSelector(this.HomePageElements.NextBtn, { timeout: 5000 });
            await this.homepage.click(this.HomePageElements.NextBtn);
            console.log("Clicked on 'Next' button successfully.");
            await this.homepage.waitForTimeout(1000);
        } catch (error) {
            throw new Error(`Homepage >> Next >> Button is not clickable: ${error}`);
        }
    }

    async clickMale(): Promise<void> {
        try {
            await this.homepage.waitForSelector(this.HomePageElements.MaleBtn, { timeout: 5000 });
            await this.homepage.click(this.HomePageElements.MaleBtn);
            console.log("Clicked on 'Male' button successfully.");
        } catch (error) {
            throw new Error(`Homepage >> Gender >> 'Male' button is not clickable: ${error}`);
        }
    }

    async clickEatingHabits(): Promise<void> {
        try {
            await this.homepage.waitForSelector(this.HomePageElements.EatingHabits, { timeout: 5000 });
            await this.homepage.click(this.HomePageElements.EatingHabits);
            console.log("Clicked on 'Eating Habits' successfully.");
        } catch (error) {
            throw new Error(`Homepage >> Eating Habits >> Option is not clickable: ${error}`);
        }
    }

    async clickSleepHabits(): Promise<void> {
        try {
            await this.homepage.waitForSelector(this.HomePageElements.SleepHavits, { timeout: 5000 });
            await this.homepage.click(this.HomePageElements.SleepHavits);
            console.log("Clicked on 'Sleep Habits' successfully.");
        } catch (error) {
            throw new Error(`Homepage >> Sleep Habits >> Option is not clickable: ${error}`);
        }
    }

    async clickEnergyLevel(): Promise<void> {
        try {
            await this.homepage.waitForSelector(this.HomePageElements.EnergyLavel, { timeout: 5000 });
            await this.homepage.click(this.HomePageElements.EnergyLavel);
            console.log("Clicked on 'Energy Level' successfully.");
        } catch (error) {
            throw new Error(`Homepage >> Energy Level >> Option is not clickable: ${error}`);
        }
    }

    async clickActivityLabel(): Promise<void> {
        try {
            await this.homepage.waitForSelector(this.HomePageElements.ActivityLabel, { timeout: 5000 });
            await this.homepage.click(this.HomePageElements.ActivityLabel);
            console.log("Clicked on 'Activity Label' successfully.");
        } catch (error) {
            throw new Error(`Homepage >> Activity Label >> Option is not clickable: ${error}`);
        }
    }

    async clickWeightGoal(): Promise<void> {
        try {
            await this.homepage.waitForSelector(this.HomePageElements.WeightGoal, { timeout: 5000 });
            await this.homepage.click(this.HomePageElements.WeightGoal);
            console.log("Clicked on 'Weight Goal' successfully.");
        } catch (error) {
            throw new Error(`Homepage >> Weight Goal >> Option is not clickable: ${error}`);
        }
    }

    async clickOverallGoalsShredFatLooseWeight(): Promise<void> {
        try {
            await this.homepage.waitForSelector(this.HomePageElements.OverallGoals_ShredfatLooseWeight, { timeout: 5000 });
            await this.homepage.click(this.HomePageElements.OverallGoals_ShredfatLooseWeight);
            console.log("Clicked on 'Overall Goals - Shred Fat/Loose Weight' successfully.");
        } catch (error) {
            throw new Error(`Homepage >> Overall Goals >> 'Shred Fat/Loose Weight' option is not clickable: ${error}`);
        }
    }
    async assertFindindYourTreatment(): Promise<void> {
        try {
            await this.homepage.waitForSelector(this.HomePageElements.FindindYourTreatment, { timeout: 5000 });
            console.log("Assertion passed: 'Findind Your Treatment' element is visible.");
          // await this.homepage.waitForTimeout(5000);
        } catch (error) {
            throw new Error(`Homepage >> Assertion >> 'Findind Your Treatment' element is not visible: ${error}`);
        }
    }
    async CheckRecuringPlan(): Promise<void> {
        let ele = await this.homepage.waitForSelector(this.HomePageElements.recuringplanText)
        if(ele){
            try {
                await this.homepage.waitForSelector(this.HomePageElements.recuringplanText, { timeout: 5000 });
                expect(await ele.textContent()).toBe('Recurring plan');
                console.log("Assertion passed: 'Recuring plan text' element is visible.");
            } catch (error) {
                throw new Error(`Homepage >> Assertion >> 'Recuring plan' element is not visible: ${error}`);
            }
        }
       
    }

    async checkRecurringPlanAndClickBuyNow(): Promise<void> {
        await this.homepage.waitForTimeout(10000);
        const productDivLocator = '(//div[@class="product"])[1]';
        const recurringPlanTextLocator = this.HomePageElements.recuringplanText;
        const buyNowButtonLocator = '(//button[normalize-space(text())="Buy Now"])[1]';
    
        try {
            // Wait for the product div to be visible
            const productDiv = await this.homepage.waitForSelector(productDivLocator, { timeout: 10000 });
    
            // Check if the product div contains the "Recurring Plan" text
           const recurringPlanElement = await this.homepage.$(recurringPlanTextLocator);
           const recurringPlanText = await recurringPlanElement?.textContent();
            if (recurringPlanText?.trim() === 'Recurring plan') {
                console.log("Assertion passed: 'Recurring Plan' text is visible inside the product div.");
    
                // Click the "Buy Now" button
                const buyNowButton = await productDiv.$(buyNowButtonLocator);
                if (buyNowButton) {
                    await buyNowButton.click();
                    await this.homepage.waitForTimeout(5000);
                    console.log("Clicked on 'Buy Now' button successfully.");
                } else {
                    throw new Error("Homepage >> Assertion >> 'Buy Now' button is not found inside the product div.");
                }
            } else {
                throw new Error("Homepage >> Assertion >> 'Recurring Plan' text is not visible inside the product div.");
            }
        } catch (error) {
            throw new Error(`Homepage >> Check Recurring Plan and Click Buy Now >> Failed: ${error}`);
        }
    }
    async assertSelectDose(): Promise<void> {
        try {
            // Wait for the "Select Dosage" element to be visible
            const selectDoseElement = await this.homepage.waitForSelector(this.HomePageElements.selectDose, { timeout: 5000 });
    
            // Assert that the text content matches "Select Dosage"
            const textContent = await selectDoseElement.textContent();
            if (textContent?.trim() === 'Select Dosage') {
                console.log("Assertion passed: 'Select Dosage' element is visible with correct text.");
            } else {
                throw new Error(`Assertion failed: 'Select Dosage' element text does not match. Found: '${textContent?.trim()}'`);
            }
        } catch (error) {
            throw new Error(`Homepage >> Assertion >> 'Select Dosage' element is not visible or incorrect: ${error}`);
        }
    }
    async clickConfirmButton(): Promise<void> {
        try {
            // Wait for the "Confirm" button to be visible
            await this.homepage.waitForSelector(this.HomePageElements.confirmBtn, { timeout: 5000 });
    
            // Click the "Confirm" button
            await this.homepage.click(this.HomePageElements.confirmBtn);
            console.log("Clicked on 'Confirm' button successfully.");
            await this.homepage.waitForTimeout(5000);
        } catch (error) {
            throw new Error(`Homepage >> Confirm >> 'Confirm' button is not clickable: ${error}`);
        }
    }
    async selectSlotRadioButton(): Promise<void> {
        try {
            // Wait for the radio button to be visible
            const slotElement = await this.homepage.waitForSelector(this.HomePageElements.slot, { timeout: 5000 });
    
            // Click the radio button
            await slotElement.click();
            console.log("Selected the radio button for 'Slot' successfully.");
        } catch (error) {
            throw new Error(`Homepage >> Slot >> Radio button is not selectable: ${error}`);
        }
    }
}