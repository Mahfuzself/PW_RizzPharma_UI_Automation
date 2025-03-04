import {Page,expect} from '@playwright/test';
export default class LoginPage {
    private page: Page;
    // static login: any;
    constructor(page: Page) {
        this.page = page;
    }
    private LoginPage_Elements  ={
        login:"(//a[@class='LoginLink'])[1]",
        email : "(//label[normalize-space(text())='Email Address:']/following::input)[1]",
        password : "(//label[normalize-space(text())='Password:']/following::input)[1]",
        Submit: "//a[@title='Login']",
        RizzLogo: "//a[@class='site__logo']//img[1]",
        CloseCoupon : '//button[@class="btn-close"]'
        // submittBtn: '//button[text()=" Submit "]',
        // PasswordEmptyIcon: "//i[contains(@class,'icon-warning-o text-danger')]",
        // EmptyPasswordText:"//div[text()=' Password cannot be empty. ']",
        // EmptyusernameIcon:"//i[contains(@class,'icon-warning-o text-danger')]",
        // EmptyUsernameText:"//div[text()=' Email address cannot be empty. ']",
        // InvalidUsernameAlert:"//div[text()=' Email address is not a valid email. ']",
        // UserListText : "//h1[text()='User List']",
        // UserDashbooard:"//h4[text()='Dashboard']",
        // incorrectUserName: `//h4[text()="This email couldn't find !"]`,
        // AccountBlockedAlert: "//h4[text()='Your account has been Locked. Please contact the system administrator.']",
        // InvalidFormat:"//span[text()='Invalid email address format']",
    }
    async clickLoginBtn(){
        const ele = await this.page.locator(this.LoginPage_Elements.login)
        try {
            await ele.click({button :'left',delay:1000})
        } catch (error) {
            throw new Error(`Hompage >> Login >> Login is not navigated from homepage : ${Error}`)
        }
    }
    async inputusernamefield(){
        const ele = await this.page.locator(this.LoginPage_Elements.email)
        try {
            await ele.type("mahfuz@yopmail.com")
        } catch (error) {
            throw new Error(`Hompage >> Login >> User name field is not functional : ${Error}`)
        }
    }
    async inputpasswordfield(){
        const ele = await this.page.locator(this.LoginPage_Elements.password)
        try {
            await ele.type("Test@1234")
        } catch (error) {
            throw new Error(`Hompage >> Login >>Enter  User name  >> Enter Password >>  Passwordfield is not functional : ${Error}`)
        }
    }
    async ClickSubmit(){
        const ele = await this.page.locator(this.LoginPage_Elements.Submit)
        try {
            await ele.click()
        } catch (error) {
            throw new Error(`Hompage >> Login >>Enter  User name  >> Enter Password >>  Login button is not functional : ${Error}`)
        }
    }
    async ClickRizzLogo(){
        const ele = await this.page.locator(this.LoginPage_Elements.RizzLogo)
        try {
            await ele.click()
        } catch (error) {
            throw new Error(`Hompage >> Login >>Enter  User name  >> Enter Password >>  Login button is not functional : ${Error}`)
        }
    }
    async CloseCoupon(){
        // this.page.waitForSelector('//button[@class="btn-close"]')
        const ele = await this.page.locator(this.LoginPage_Elements.CloseCoupon)
        try {
            await ele.click()
             await this.page.waitForTimeout(6000)
        } catch (error) {
            throw new Error(`Hompage >> Login >>Enter  User name  >> Enter Password >>  Login>> Coupon is not closedl : ${Error}`)
        }
    }
    // async login(username: string, password: string) {
    //     await this.enterEmail(username);
    //     await this.enterLoginPassword(password);
    //     await this.page.waitForLoadState()
    //     await this.page.waitForTimeout(1000)
    //     await this.clickSubmittBtn();
    //     await this.page.waitForTimeout(5000)
    //      //await this.page.reload()
    // }
//     async loginNegative(invalidusername: string, invalidpassword: string) {
//         await this.enterEmail(invalidusername);
//         await this.enterLoginPassword(invalidpassword);
//         await this.clickSubmittBtn();
//     }
//     async enterEmail(emailaddress: string) {
//         await this.page.locator(this.LoginPage_Elements.email).type(emailaddress,{delay: 100});
//             // input[type='text'] 
//     }
//     async enterLoginPassword(password: string) {
//         await this.page.locator('//input[@placeholder="Password"]')
//             .type(password);
//             // "input[type='password']"
            
//     }
//     async clickLogoutBtn() {
//         await this.page.locator("//p[text()='Logout']")
//             .click()
//     }
//     async shouldBeshowInvalidCredentials() {
//         const ele = this.page.locator("text=Invalid credentials")
//         expect(ele).toContainText("Invalid credentials")
//     }
//     async shouldShowUserNameIsNotEmpty() {
//         const ele = this.page.locator(`//p[text()='"username" is not allowed to be empty']`)
//         expect(ele).toContainText(`"username" is not allowed to be empty`)
//     }
//     async clickInvalidCredantialsWindowOkBtn() {
//         const ele = this.page.locator("text=Ok")
//         expect(ele).toContainText("Ok")
//         await ele.click()
//     }
//     async clickSubmittBtn() {
//         await Promise.all([
//             this.page.waitForNavigation,
//             // this.page.click("button:has-text('Login')"),
//             await this.page.locator('//button[text()=" Submit "]').click({delay : 1000})
//         ])
//     }
//     async verifyCueLogoIsVisible() {
//         const ele = this.page.locator("//h1/preceding::div[@class='MuiBox-root css-uycfjs']")
//         expect(ele).toBeVisible()
//     }
//     async verifySigninTextIsVisible() {
//         const ele = this.page.locator("//h1[text()='Sign in']")
//         expect(ele).toBeVisible()
//     }
//     async verifySigninPageTitleTextIsVisible() {
//         const ele = this.page.locator("//p[text()='Sign in and start managing your Games!']")
//         expect(ele).toBeVisible()
//     }
//     async verifyIdLabelIsVisible() {
//         const ele = this.page.locator("//label[text()='Id']")
//         expect(ele).toBeVisible()
//     }
//     async verifySecretLabelIsVisible() {
//         const ele = this.page.locator("//label[text()='Secret']")
//         expect(ele).toBeVisible()
//     }
//     async inputSecret() {
//         const ele = this.page.locator("//input[@type='password']")
//         await ele.fill("Demo Data")
//     }
//     async clickEyeBtn() {
//         const ele = this.page.locator("//button[contains(@class,'MuiButtonBase-root MuiIconButton-root')]")
//         expect(ele).toBeVisible()
//         await ele.click()
//     }
//     async invalidusernameformat(){
//         await this.page.locator(this.LoginPage_Elements.email).fill("qa_automation")
//     }
//     async verifyEmptyPassword_Alert(){
//          const ele = await this.page.locator(this.LoginPage_Elements.EmptyPasswordText)
//          if(await ele.isVisible()){
//             await expect(ele).toContainText("Password cannot be empty.")
//          }

//     }
//     async clickEmptyPasswordIcon(){
//         const ele = await this.page.locator(this.LoginPage_Elements.PasswordEmptyIcon).last()
//         if(await ele.isVisible()){
//            await ele.last().click()
//         }

//    }
//    async clickEmptyUsernameIcon(){
//     const ele = await this.page.locator(this.LoginPage_Elements.EmptyusernameIcon).first()
//     if(await ele.isVisible()){
//        await ele.first().click()
//     }

// }
// async verifyEmptyUsername_Alert(){
//     const ele = await this.page.locator(this.LoginPage_Elements.EmptyUsernameText)
//     if(await ele.isVisible()){
//        await expect(ele).toContainText("Email address cannot be empty.")
//     }

// }
// async verifyInvalaidUsernameFormat_Alert(){
//     const ele = await this.page.locator(this.LoginPage_Elements.InvalidUsernameAlert)
//     if(await ele.isVisible()){
//        await expect(ele).toContainText("Email address is not a valid email.")
//        await this.page.waitForTimeout(1000)
//     }
// }
// async verifyUserListText(){
//     const ele = await this.page.locator(this.LoginPage_Elements.UserListText)
//     if(await ele.isVisible()){
//        await expect(ele).toContainText("User List")
//     }
//     else throw new Error('User list text is not visible')
// }
// async verifyAfterSuccessfullyLoginDashboardText(){
//     const ele = await this.page.locator(this.LoginPage_Elements.UserDashbooard)
//     if(await ele.isVisible()){
//        await expect(ele).toContainText("Dashboard")
//     }
//     else throw new Error('User Dashboard text is not visible')
// }
// async inputDoesnotexistEmail(wrongemail : string){
//     const ele = await this.page.locator(this.LoginPage_Elements.email)
//     if(await ele.isVisible()){
//         await ele.fill(wrongemail)

//     }
// }
// async inputBlockedEmail(blockedemail : string){
//     const ele = await this.page.locator(this.LoginPage_Elements.email)
//     if(await ele.isVisible()){
//         await ele.fill(blockedemail)

//     }
// }
// async verifyInvalidUserName(){
//     const ele = await this.page.locator(this.LoginPage_Elements.incorrectUserName)
//     try {
//         await expect(ele).toContainText("This email couldn't find !")
//     } catch (error) {
//         throw new Error(`Wrong user name alert is not visible : ${Error}`)
//     }
// }
// async verifyLockedAccountAlert(){
//     const ele = await this.page.locator(this.LoginPage_Elements.AccountBlockedAlert)
//     try {
//         await expect(ele).toContainText("Your account has been Locked. Please contact the system administrator.")
//     } catch (error) {
//         throw new Error(`Blocked account alert is not visible : ${Error}`)
//     }
// }
// async verifyInvaliadEMailFormat(){
//     const ele = await this.page.locator(this.LoginPage_Elements.InvalidFormat)
//     try {
//         await expect.soft(ele).toContainText("Invalid email address format")
//     } catch (error) {
//         throw new Error(`Sigin | Input invalid email format| Could not found locator, ${error}`)
//     }
// }
// async clickOTPInputField(){
//     await  this.page.locator("(//input[@placeholder='-'])[1]").click()
// }
// // async verifyLoginPageDesign(){
// //     await this.page.waitForLoadState()
// //     expect(await this.page.screenshot({
// //         path: 'screenshots/loginDesign.png',
// //         fullPage: true
// //     })).toMatchSnapshot('loginDesign.png')​
   
// // }
// async LoginPageMatch(){
//     await this.page.waitForLoadState()
//     await expect(await this.page.screenshot({
//        path: 'screenshots/loginDesign.png',
//        fullPage : true
//     })).toMatchSnapshot('loginDesign.png')
// }
 
}