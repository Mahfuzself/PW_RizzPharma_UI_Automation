
import test,{ expect} from '@fixtures/basepages';
import { Frame, Page } from "@playwright/test";
test("verify checkout with new user is working properly",async({page,registerPage,loginPage,checkoutPage})=>{
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
    await page.close()


})