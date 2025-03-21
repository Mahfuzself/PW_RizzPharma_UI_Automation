import test,{ expect} from '@fixtures/basepages';
import { Frame, Page } from "@playwright/test";
import ENV from 'utils/env'
import webHelper from "../helper/webHelper";
import homePage from '@pages/home.page';
test("verify that madicine is order from home page after clicking findmy treatment button", async ({ page, homepage,checkoutPage,docmedilinkloginPage,registerPage,loginPage }) => {
       const helper = new webHelper(page);
        let firstName = "",lastName = "", email = ""
        firstName = await registerPage.generateFirstName()
        lastName = await registerPage.generateLastName()
        email = firstName+lastName+"@yopmail.com"
	await page.goto(ENV.BASE_URL);
    await loginPage.CloseCoupon()
    await homepage.clickFindMyTreatment();
    await homepage.assertFindindYourTreatment();
    await homepage.clickAge18To29();
    await homepage.clickNext();
    await homepage.clickMale();
    await homepage.clickNext();
    await homepage.clickEatingHabits();
    await homepage.clickNext();
    await homepage.clickSleepHabits();
    await homepage.clickNext();
    await homepage.clickEnergyLevel()
    await homepage.clickNext();
    await homepage.clickActivityLabel()
    await homepage.clickNext();
    await homepage.clickWeightGoal()
    await homepage.clickNext();
    await homepage.clickOverallGoalsShredFatLooseWeight()
    await homepage.clickNext();
    await homepage.checkRecurringPlanAndClickBuyNow()
    await homepage.assertFindindYourTreatment();
    await homepage.selectSlotRadioButton();
    await homepage.clickConfirmButton();
    await checkoutPage.ClickCart()
    await checkoutPage.ClickProccedToCheckoutBtn()
    await checkoutPage.Select_State_texas()
    await checkoutPage.ClickYesBtn()
    await registerPage.clickSignupBtn()
    await registerPage.inputuserEmail(email)
    await registerPage.inputFirstName(firstName)
    await registerPage.inputLastName(lastName)
    await registerPage.inputDisplayName(firstName,lastName)
    await registerPage.inputPhoneNumber()
    await registerPage.inputDateOfBirth()
    await registerPage.inputpasswordfield()
    await registerPage.inputConfirmpasswordfield()
    await registerPage.ClickSubmit()
    await loginPage.CloseCoupon()
    // await checkoutPage.ClickCart()
    // await checkoutPage.ClickProccedToCheckoutBtn()
    // await checkoutPage.Select_State_texas()
    // await checkoutPage.ClickYesBtn()
    await checkoutPage.inputCardNumber()
    await checkoutPage.inputCardExpDate()
    await checkoutPage.inputSecurity()
    await checkoutPage.selectCountry()
    await checkoutPage.inputZIP()
    await checkoutPage.CheckedTermsAndCondutions
    await checkoutPage.EnterShippingName(firstName,lastName)
    await checkoutPage.EnterShippingAddress()
    await checkoutPage.InputShippingEmail(email)
    await checkoutPage.CheckedSameasShipping()
    await checkoutPage.ClickNext()
    await helper.uploadFile('d:\\SQA\\RL\\Automation\\PW_RizzPharma_UI_Automation\\testData\\images\\Front.png', checkoutPage.fileUploadLocator, checkoutPage.uploadBtnLocator) 
    await page.getByRole('button', { name: 'Select a report type ' }).click();
    await page.getByText('Driving license front part').click();
    await page.getByRole('button', { name: 'Save' }).click();
    await page.getByRole('button', { name: 'Okay' }).click();
    await page.goto('https://stage.docmedilink.com/login');
    await docmedilinkloginPage.writeDataToExcel(firstName,lastName,"Test@1234",email)
    await docmedilinkloginPage.login()
    


    
});
 test("verify that Recurring Plan madicine is order from home page category details", async ({page,homepage,loginPage,checkoutPage,registerPage,docmedilinkloginPage}) => {
    const helper = new webHelper(page);
    let firstName = "",lastName = "", email = ""
    firstName = await registerPage.generateFirstName()
    lastName = await registerPage.generateLastName()
    email = firstName+lastName+"@yopmail.com"
    await page.goto(ENV.BASE_URL);
    await loginPage.CloseCoupon()
    await homepage.viewWeightLossDetails()
    await homepage.clickAge18To29();
    await homepage.clickNext();
    await homepage.clickMale();
    await homepage.clickNext();
    await homepage.clickEatingHabits();
    await homepage.clickNext();
    await homepage.clickSleepHabits();
    await homepage.clickNext();
    await homepage.clickEnergyLevel()
    await homepage.clickNext();
    await homepage.clickActivityLabel()
    await homepage.clickNext();
    await homepage.clickWeightGoal()
    await homepage.clickNext();
    // await homepage.clicweightmanagementapproach()
    await homepage.clickOverallGoalsShredFatLooseWeight()
    await homepage.clickNext();
    await homepage.checkRecurringPlanAndClickBuyNow()
    // await homepage.selectResearchuseonly()
    // await homepage.clickIAgreeButton()
    await homepage.assertFindindYourTreatment();
    await homepage.selectSlotRadioButton();
    await homepage.clickConfirmButton();
    // await checkoutPage.ClickCart()
    await checkoutPage.ClickProccedToCheckoutBtn()
    await checkoutPage.Select_State_texas()
    await checkoutPage.ClickYesBtn()
    await registerPage.clickSignupBtn()
    await registerPage.inputuserEmail(email)
    await registerPage.inputFirstName(firstName)
    await registerPage.inputLastName(lastName)
    await registerPage.inputDisplayName(firstName,lastName)
    await registerPage.inputPhoneNumber()
    await registerPage.inputDateOfBirth()
    await registerPage.inputpasswordfield()
    await registerPage.inputConfirmpasswordfield()
    await registerPage.ClickSubmit()
    await loginPage.CloseCoupon()
    // await checkoutPage.ClickCart()
    // await checkoutPage.ClickProccedToCheckoutBtn()
    // await checkoutPage.Select_State_texas()
    // await checkoutPage.ClickYesBtn()
    await checkoutPage.inputCardNumber()
    await checkoutPage.inputCardExpDate()
    await checkoutPage.inputSecurity()
    await checkoutPage.selectCountry()
    await checkoutPage.inputZIP()
    await checkoutPage.CheckedTermsAndCondutions
    await checkoutPage.EnterShippingName(firstName,lastName)
    await checkoutPage.EnterShippingAddress()
    await checkoutPage.InputShippingEmail(email)
    await checkoutPage.CheckedSameasShipping()
    await checkoutPage.ClickNext()
    await helper.uploadFile('d:\\SQA\\RL\\Automation\\PW_RizzPharma_UI_Automation\\testData\\images\\Front.png', checkoutPage.fileUploadLocator, checkoutPage.uploadBtnLocator) 
    await page.getByRole('button', { name: 'Select a report type ' }).click();
    await page.getByText('Driving license front part').click();
    await page.getByRole('button', { name: 'Save' }).click();
    await page.getByRole('button', { name: 'Okay' }).click();
    await page.goto('https://stage.docmedilink.com/login');
    await docmedilinkloginPage.writeDataToExcel(firstName,lastName,"Test@1234",email)
    await docmedilinkloginPage.login()
 })
 test("verify that Research only Use madicine is order from home page category details", async ({page,homepage,loginPage,checkoutPage,registerPage,docmedilinkloginPage}) => {
    const helper = new webHelper(page);
    let firstName = "",lastName = "", email = ""
    firstName = await registerPage.generateFirstName()
    lastName = await registerPage.generateLastName()
    email = firstName+lastName+"@yopmail.com"
    await page.goto(ENV.BASE_URL);
    await loginPage.CloseCoupon()
    await homepage.viewWeightLossDetails()
    await homepage.clickAge18To29();
    await homepage.clickNext();
    await homepage.clickMale();
    await homepage.clickNext();
    await homepage.clickEatingHabits();
    await homepage.clickNext();
    await homepage.clickSleepHabits();
    await homepage.clickNext();
    await homepage.clickEnergyLevel()
    await homepage.clickNext();
    await homepage.clickActivityLabel()
    await homepage.clickNext();
    await homepage.clickWeightGoal()
    await homepage.clickNext();
    await homepage.clicweightmanagementapproach()
    // await homepage.clickOverallGoalsShredFatLooseWeight()
    await homepage.clickNext();
    // await homepage.checkRecurringPlanAndClickBuyNow()
    await homepage.selectResearchuseonly()
    await homepage.clickIAgreeButton()
    // await homepage.assertFindindYourTreatment();
    // await homepage.selectSlotRadioButton();
    // await homepage.clickConfirmButton();
    // await checkoutPage.ClickCart()
    await checkoutPage.ClickProccedToCheckoutBtn()
    await checkoutPage.Select_State_texas()
    await checkoutPage.ClickYesBtn()
    await registerPage.clickSignupBtn()
    await registerPage.inputuserEmail(email)
    await registerPage.inputFirstName(firstName)
    await registerPage.inputLastName(lastName)
    await registerPage.inputDisplayName(firstName,lastName)
    await registerPage.inputPhoneNumber()
    await registerPage.inputDateOfBirth()
    await registerPage.inputpasswordfield()
    await registerPage.inputConfirmpasswordfield()
    await registerPage.ClickSubmit()
    await loginPage.CloseCoupon()
    // await checkoutPage.ClickCart()
    // await checkoutPage.ClickProccedToCheckoutBtn()
    // await checkoutPage.Select_State_texas()
    // await checkoutPage.ClickYesBtn()
    await checkoutPage.inputCardNumber()
    await checkoutPage.inputCardExpDate()
    await checkoutPage.inputSecurity()
    await checkoutPage.selectCountry()
    await checkoutPage.inputZIP()
    await checkoutPage.CheckedTermsAndCondutions
    await checkoutPage.EnterShippingName(firstName,lastName)
    await checkoutPage.EnterShippingAddress()
    await checkoutPage.InputShippingEmail(email)
    await checkoutPage.CheckedSameasShipping()
    await checkoutPage.ClickNext()
    await helper.uploadFile('d:\\SQA\\RL\\Automation\\PW_RizzPharma_UI_Automation\\testData\\images\\Front.png', checkoutPage.fileUploadLocator, checkoutPage.uploadBtnLocator) 
    await page.getByRole('button', { name: 'Select a report type ' }).click();
    await page.getByText('Driving license front part').click();
    await page.getByRole('button', { name: 'Save' }).click();
    await page.getByRole('button', { name: 'Okay' }).click();
    await page.goto('https://stage.docmedilink.com/login');
    await docmedilinkloginPage.writeDataToExcel(firstName,lastName,"Test@1234",email)
    await docmedilinkloginPage.login()
 })