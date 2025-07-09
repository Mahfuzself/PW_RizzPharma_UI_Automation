import test,{ expect} from '@fixtures/basepages';
import { Page } from '@playwright/test';
import ENV from 'utils/env';
import webHelper from '../helper/webHelper';
import CheckoutPage from '../pages/Products_CheckoutPage/checkout.page';
test("Verify that product is added to cart from top product page",async({page,top_productpage,checkoutPage,registerPage,loginPage,docmedilinkloginPage})=>{
    const helper = new webHelper(page);
    let firstName = "",lastName = "", email = ""
    firstName = await registerPage.generateFirstName()
    lastName = await registerPage.generateLastName()
    email = firstName+lastName+"@yopmail.com"
    await page.goto(ENV.BASE_URL)
    await page.waitForTimeout(3000)
    await helper.clickNoThanksIfVisible()
    await top_productpage.clickTopProductsDropDown()
    await top_productpage.clickSildenafil()
    await helper.clickAddToCartAndHandleDosage()
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

   

})