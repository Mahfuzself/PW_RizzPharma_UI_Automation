import test,{ expect} from '@fixtures/basepages';
import { Frame, Page } from "@playwright/test";
import ENV from 'utils/env'
import webHelper from "../helper/webHelper";
import * as XLSX from 'xlsx';
import pa from 'path'

test.only("verify checkout with new user is working properly",async({page,registerPage,loginPage,checkoutPage,docmedilinkloginPage})=>{
    const helper = new webHelper(page);
    let firstName = "",lastName = "", email = ""
    firstName = await registerPage.generateFirstName()
    lastName = await registerPage.generateLastName()
    email = firstName+lastName+"@yopmail.com"
    await page.goto('/Register?returnurl=#cart/ref/')
    // await loginPage.CloseCoupon()
    await loginPage.ClickRizzLogo()
    await loginPage.CloseCoupon()

    await checkoutPage.clickAddToCardProduct()
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
    await checkoutPage.ClickCart()
    await checkoutPage.ClickProccedToCheckoutBtn()
    await checkoutPage.Select_State_texas()
    await checkoutPage.ClickYesBtn()
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
    // await docmedilinkloginPage.writeDataToExcel(firstName,lastName,"Test@1234",email)
    // const userData = [
    //     ['First Name', 'Last Name', 'Email', 'Password'], // Header row
    //     [firstName, lastName, email, "Test@1234"], // Data row
    //   ];
    
    //   // Create a new workbook and add the user data as a sheet
    //   const wb = XLSX.utils.book_new();
    //   const ws = XLSX.utils.aoa_to_sheet(userData);
    //   XLSX.utils.book_append_sheet(wb, ws, 'UserData');

    // await checkoutPage.ClicIWillDoLater()


})
test("Login with checkout",async({page,registerPage,checkoutPage,loginPage})=>{
    let firstName = "",lastName = "", email = ""
    firstName = await registerPage.generateFirstName()
    lastName = await registerPage.generateLastName()
    email = firstName+lastName+"@yopmail.com"
    await page.goto('/Login?returnurl=')
    await loginPage.inputusernamefield()
    await loginPage.inputpasswordfield()
    await loginPage.ClickSubmit()
    // // await loginPage.CloseCoupon()
    // await loginPage.ClickRizzLogo()
    // await loginPage.CloseCoupon()
    // await checkoutPage.clickAddToCardProduct()
    // await checkoutPage.ClickCart()
    // await checkoutPage.ClickProccedToCheckoutBtn()
    // await checkoutPage.Select_State_texas()
    // await checkoutPage.ClickYesBtn()
    // await registerPage.clickSignupBtn()
    // await registerPage.inputuserEmail(email)
    // await registerPage.inputFirstName(firstName)
    // await registerPage.inputLastName(lastName)
    // await registerPage.inputDisplayName(firstName,lastName)
    // await registerPage.inputPhoneNumber()
    // await registerPage.inputDateOfBirth()
    // await registerPage.inputpasswordfield()
    // await registerPage.inputConfirmpasswordfield()
    // await registerPage.ClickSubmit()
     await loginPage.CloseCoupon()
     await checkoutPage.clickAddToCardProduct()
    await checkoutPage.ClickCart()
    await checkoutPage.ClickProccedToCheckoutBtn()
    await checkoutPage.Select_State_texas()
    await checkoutPage.ClickYesBtn()
    // const nextButton = await page.waitForSelector('button#next', { timeout: 30000 });
// await nextButton.waitForEnabled({ timeout: 30000 });
    await checkoutPage.VerifyHeader()
    // const iframeElement = await page.waitForSelector("//div[@id='card-element']//iframe", {timeout: 60000});
    // const iframe: any = await iframeElement.contentFrame();

// Check if the iframe is ready and visible
    // await iframe.waitForSelector('//input[@placeholder="1234 1234 1234 1234"]');
    // await page.waitForResponse((response) => response.url().includes('stripe.com') && response.status() === 200)
    await checkoutPage.inputCardNumber()
    await checkoutPage.inputCardExpDate()
    await checkoutPage.inputSecurity()
    await checkoutPage.selectCountry()
    await checkoutPage.inputZIP()
    await checkoutPage.CheckedTermsAndCondutions()
//    const ele =  await page.locator('//div[@class="dropdown dnn-disabled searchable-dropdown"]').allInnerTexts()
//    const placeholderText = await page.getAttribute("(//input[@placeholder='Select a state'])[1]", 'placeholder')
//   console.log(ele)

   
    await checkoutPage.EnterShippingAddress()
    await checkoutPage.EnterShippingName(firstName,lastName)

    // await page.close()


})
test("Upload images",async({page})=>{
        await page.getByText('Browse Files').click();
        await page.locator('#Body').setInputFiles('Front.png');
})
