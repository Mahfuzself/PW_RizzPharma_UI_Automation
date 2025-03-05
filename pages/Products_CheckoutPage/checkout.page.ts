
import {Page,expect} from '@playwright/test';
export default class CheckoutPage {
    private page: Page;
    // static login: any;
    constructor(page: Page) {
        this.page = page;
    }
    private checkoutPage_Elements  ={
      AddToCart:"div:nth-child(3) > .product-card__footer > .product-card__btn",
      cart:'(//i[@class=\"icon-cart\"])[1]//following-sibling::span[1]',
      proccedToCheckout:'//div[@class="order-summary-cta"]//following-sibling::button',
      state : '//input[@type="radio"]/following-sibling::label[1]//span[text()="California"]',
      yesbtn:"//button[@data-bind='click:save']",
      cardnumber:'//input[@placeholder="1234 1234 1234 1234"]',
      expdate:'//input[@id="Field-expiryInput"]',
      cvc:'//input[@id="Field-cvcInput"]',
      country:'//select[@id="Field-countryInput"]',
      zipcode:'//input[@id="Field-postalCodeInput"]',
      pay:"(//button[contains(@class,'btn btn-block')])[1]",
      checkbox:"(//label[@class='custom-check']//span)[1]",
      ShipnigName:"//input[@title='Shipping name is required']",
      ShippingAddress:"(//input[@class='basic-input pac-target-input'])[1]",
      Shippingemail:"//input[@title='Shipping email is required']",
      RecuringPlan:'//span[text()="Recurring plan"]',

    }
    async clickAddToCardProduct() {
        // let recuringplan = await this.page.locator('(//div[@class="product-card"]//following-sibling::span[text()="Recurring plan"])[1]')
        // await this.page.waitForSelector(this.checkoutPage_Elements.AddToCart)
        const ele = await this.page.locator(this.checkoutPage_Elements.AddToCart)
        try {
            await ele.hover()
            console.log("hover")
            await ele.focus()
            await ele.click()
            console.log("test")
            let agreebtn = await this.page.locator("//button[text()='I Agree']")
            if (await agreebtn.isVisible()) {
                agreebtn.click({ button: 'left', delay: 1000 })
            }
    
        } catch (error) {
            throw new Error(`Hompage >> Add to cart is not functional from homepage: ${error}`);
        }
    }
    
    async ClickCart(){
        const ele = await this.page.locator(this.checkoutPage_Elements.cart)
        try {
            await ele.click()
            await this.page.waitForTimeout(8000)
        } catch (error) {
            throw new Error(`Hompage >> Add to Cart Products >> Cart >> Cart button is not functional : ${Error}`)
        }
    }
    async ClickProccedToCheckoutBtn(){

        await this.page.getByRole('button', { name: ' Add to cart' }).click();
        await this.page.getByRole('button', { name: 'I Agree' }).click();
    }
    async Select_State_texas(){
        const ele = await this.page.locator(this.checkoutPage_Elements.state)
        try {
            await ele.click()
            // await this.page.waitForEvent("close")
            await this.page.waitForTimeout(2000)
        } catch (error) {
            throw new Error(`Hompage >> Add to Cart Products >> Cart >> Cart button  >> Procced to checkout>> State  is not functional : ${Error}`)
        }
    }
    async ClickYesBtn(){
        await this.page.waitForTimeout(2000)
        await this.page.waitForSelector('//p[text()="Confirm Your State Selection!"]');
        const ele = await this.page.locator(this.checkoutPage_Elements.yesbtn)
        try {
            await ele.click({timeout:1000})
            await this.page.waitForTimeout(2000)
            // await this.page.waitForSelector("//button[text()='Go Back']/following-sibling::button", { timeout: 30000 })
            //  await this.page.waitForFunction("//title[normalize-space(text())='Payment - Rizz Pharma']" ,{ timeout: 30000 });

            // await this.page.waitForTimeout(30000)
           

        } catch (error) {
            throw new Error(`Hompage >> Add to Cart Products >> Cart >> Cart button  >> Select Yes >>  Procced to checkout>> State  is not functional : ${Error}`)
        }
    }
    async selectCountry(){
        //  await this.page.waitForSelector('//p[text()="Confirm Your State Selection!"]',{state : 'detached'});
        // await expect(this.page.locator('//select[@id="Field-countryInput"]')).toBeVisible()
        const ele = await this.page.frameLocator("//div[@id='card-element']//iframe").locator(this.checkoutPage_Elements.country)
        try {
           await ele.selectOption({label:"United States"})
        } catch (error) {
            throw new Error(`Mens Retreat >> Booking >> Select Number of booking >> input Promo code >> Click Terms and condution check box >> input participants info >> Country   dropdown field is not functional : could not found locator ${error}`)
        }
    }
    async inputCardNumber(){
        let card_number : any = "4242424242424242"
        // await this.page.reload();
         const ele = await this.page.frameLocator("//div[@id='card-element']//iframe").locator(this.checkoutPage_Elements.cardnumber)
        try {
            await ele.click()
            await ele.fill("4242424242424242")
            // await this.page.locator('//div[@class="p-CardNumberInput"]').click();
            
            // console.log("Ok")
            //  await this.page.frameLocator("//div[@id='card-element']//iframe").locator('#Field-numberInput').fill(card_number)
            //  console.log("OK")
            // await ele.fill(card_number)
        } catch (error) {
             throw new Error(`Mens Retreat >> Booking >> Select Number of booking >> input Promo code >> Click Terms and condution check box >> input participants info >> card number input field is not functional : could not found locator ${error}`)
        }
    }
    async inputCardExpDate(){
        let card_exp = "1225"
        const ele = await this.page.frameLocator("//div[@id='card-element']//iframe").locator(this.checkoutPage_Elements.expdate)
        try {
           await ele.fill(card_exp)
        } catch (error) {
            throw new Error(`Mens Retreat >> Booking >> Select Number of booking >> input Promo code >> Click Terms and condution check box >> input participants info >> card exp date input field is not functional : could not found locator ${error}`)
        }
    }
    async inputSecurity(){
        let security_Code = "567"
        const ele = await this.page.frameLocator("//div[@id='card-element']//iframe").locator(this.checkoutPage_Elements.cvc)
        try {
           await ele.fill(security_Code)
        } catch (error) {
            throw new Error(`Mens Retreat >> Booking >> Select Number of booking >> input Promo code >> Click Terms and condution check box >> input participants info >> Security Code input field is not functional : could not found locator ${error}`)
        }
    }
    async inputZIP(){
        let zip = "75001"
        const ele = await this.page.frameLocator("//div[@id='card-element']//iframe").locator(this.checkoutPage_Elements.zipcode)
        try {
           await ele.fill(zip)
           await this.page.waitForTimeout(3000)
        } catch (error) {
            throw new Error(`Mens Retreat >> Booking >> Select Number of booking >> input Promo code >> Click Terms and condution check box >> input participants info >> Security Code input field is not functional : could not found locator ${error}`)
        }
    }
    async CheckedTermsAndCondutions(){
        const ele = await this.page.locator(this.checkoutPage_Elements.checkbox)
        try {
            await ele.hover()
           await ele.click()
           await this.page.waitForTimeout(3000)
        } catch (error) {
            throw new Error(`Mens Retreat >> Booking >> Select Number of booking >> input Promo code >> Click Terms and condution check box >> input participants info >> Security Code input field is not functional : could not found locator ${error}`)
        }
    }
    async VerifyHeader(){
        const ele = await this.page.locator("//h1[contains(.,'Payment Method')]")
        try {
           await expect(ele).toContainText("Payment Method")
           await this.page.waitForTimeout(1000)
        } catch (error) {
            throw new Error(`Mens Retreat >> Booking >> Select Number of booking >> input Promo code >> Click Terms and condution check box >> input participants info >> Security Code input field is not functional : could not found locator ${error}`)
        }
    }
    // async inputFirstName(UserFirstName : any){
    //     const ele = await this.page.locator(this.RegisterPage_Elements.firstName)
    //     try {
    //         await ele.type(UserFirstName)
    //     } catch (error) {
    //         throw new Error(`Hompage >> Login >> First Name User field is not functional : ${Error}`)
    //     }
    // }
    // async inputLastName(UserLastName : any){
    //     const ele = await this.page.locator(this.RegisterPage_Elements.lastName)
    //     try {
    //         await ele.type(UserLastName)
    //     } catch (error) {
    //         throw new Error(`Hompage >> Login >> Last Name User field is not functional : ${Error}`)
    //     }
    // }
    async  getRandomInt(min: number, max: number) {
        return Math.floor(Math.random() * (max - min)) + min;
  }
     async capFirst(string:String) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
     async generateFirstName(){
        let name1 = ["Adam", "Alex", "Aaron", "Ben", "Carl", "Dan", "David", "Edward", "Fred", "Frank", "George", "Hal", "Hank", "Ike", "John", "Jack", "Joe", "Larry", "Monte", "Matthew", "Mark", "Nathan", "Otto", "Paul", "Peter", "Roger", "Roger", "Steve", "Thomas", "Tim", "Ty", "Victor", "Walter","Lulloff", "Maki", "Martin", "McGinnis", "Mills", "Moody", "Moore", "Napier", "Nelson", "Norquist", "Nuttle", "Olson", "Ostrander", "Reamer", "Reardon", "Reyes", "Rice", "Ripka", "Roberts", "Rogers", "Root", "Sandstrom", "Sawyer", "Schlicht", "Schmitt", "Schwager", "Schutz", "Schuster", "Tapia", "Thompson", "Tiernan", "Tisler"];
        let firstname =  await this.capFirst(name1[ await this.getRandomInt(0, name1.length + 1)])
        return firstname;
        
    }
    async EnterShippingAddress(statename : any){
        const ele = await this.page.locator(this.checkoutPage_Elements.ShippingAddress)
        try {
            ele.fill(statename)
            await this.page.waitForTimeout(1000)
            await this.page.keyboard.press('ArrowDown')
            await this.page.waitForTimeout(1000)
            await this.page.keyboard.press('ArrowDown')
            await this.page.waitForTimeout(1000)
            await this.page.keyboard.press('ArrowDown')
            await this.page.waitForTimeout(2000)
            // await this.page.hover.click();
        } catch (error) {
            throw new Error(`Mens Retreat >> Booking >> Select Number of booking >> input Promo code >> Click Terms and condution check box >> input participants info >> Security Code input field is not functional : could not found locator ${error}`)
        }
    }
    async EnterShippingName(fname : any,lname : any){
        const ele = await this.page.locator(this.checkoutPage_Elements.ShipnigName)
        try {
            await ele.fill(fname+" " +lname)
            await this.page.waitForTimeout(3000)
        } catch (error) {
            throw new Error(`Mens Retreat >> Booking >> Select Number of booking >> input Promo code >> Click Terms and condution check box >> input participants info >> Security Code input field is not functional : could not found locator ${error}`)
        }
    }
    async InputShippingEmail(semail : any){
        const ele = await this.page.locator(this.checkoutPage_Elements.Shippingemail)
        try {
            await ele.click({delay:1000})
            await ele.fill(semail)
            await this.page.waitForTimeout(3000)
        } catch (error) {
            throw new Error(`Mens Retreat >> Booking >> Select Number of booking >> input Promo code >> Click Terms and condution check box >> input participants info >> Security Code input field is not functional : could not found locator ${error}`)
        }
    }
    async CheckedSameasShipping(){
        const ele = await this.page.locator("(//label[@class='custom-check'])[3]")
        try {
            await ele.hover()
            await ele.click({delay:1000})
            await this.page.waitForTimeout(1000)
        } catch (error) {
            throw new Error(`Mens Retreat >> Booking >> Select Number of booking >> input Promo code >> Click Terms and condution check box >> input participants info >> Security Code input field is not functional : could not found locator ${error}`)
        }
    }
    async ClickNext(){
        const ele = await this.page.locator("//button[contains(.,'Next')]")
        try {
            await ele.click({delay:1000})
            await this.page.waitForTimeout(5000)
        } catch (error) {
            throw new Error(`Mens Retreat >> Booking >> Select Number of booking >> input Promo code >> Click Terms and condution check box >> input participants info >> Security Code input field is not functional : could not found locator ${error}`)
        }
    }
    async ClicIWillDoLater(){
        const ele = await this.page.locator('//button[text()="I will do it later"]')
        try {
            await ele.click({delay:1000})
            await this.page.waitForTimeout(5000)
        } catch (error) {
            throw new Error(`Mens Retreat >> Booking >> Select Number of booking >> input Promo code >> Click Terms and condution check box >> input participants info >> Security Code input field is not functional : could not found locator ${error}`)
        }
    }
    async generateLastName(){
        let name2 = ["Anderson", "Ashwoon", "Aikin", "Bateman", "Bongard", "Bowers", "Boyd", "Cannon", "Cast", "Deitz", "Dewalt", "Ebner", "Frick", "Hancock", "Haworth", "Hesch", "Hoffman", "Kassing", "Knutson", "Lawless", "Lawicki", "Mccord", "McCormack", "Miller", "Myers", "Nugent", "Ortiz", "Orwig", "Ory", "Paiser", "Pak", "Pettigrew", "Quinn", "Quizoz", "Ramachandran", "Resnick", "Sagar", "Schickowski", "Schiebel", "Sellon", "Severson", "Shaffer", "Solberg", "Soloman", "Sonderling", "Soukup", "Soulis", "Stahl", "Sweeney", "Tandy", "Trebil", "Trusela", "Trussel", "Turco", "Uddin", "Uflan", "Ulrich", "Upson", "Vader", "Vail", "Valente", "Van Zandt", "Vanderpoel", "Ventotla", "Vogal", "Wagle", "Wagner", "Wakefield", "Weinstein", "Weiss", "Woo", "Yang", "Yates", "Yocum", "Zeaser", "Zeller", "Ziegler", "Bauer", "Baxster", "Casal", "Cataldi", "Caswell", "Celedon", "Chambers", "Chapman", "Christensen", "Darnell", "Davidson", "Davis", "DeLorenzo", "Dinkins", "Doran", "Dugelman", "Dugan", "Duffman", "Eastman", "Ferro", "Ferry", "Fletcher", "Fietzer", "Hylan", "Hydinger", "Illingsworth", "Ingram", "Irwin", "Jagtap", "Jenson", "Johnson", "Johnsen", "Jones", "Jurgenson", "Kalleg", "Kaskel", "Keller", "Leisinger", "LePage", "Lewis", "Linde"];
        let lastname =  await this.capFirst(name2[ await this.getRandomInt(0, name2.length + 1)])
        return lastname
        
    }
    // async ClickRizzLogo(){
    //     const ele = await this.page.locator(this.LoginPage_Elements.RizzLogo)
    //     try {
    //         await ele.click()
    //     } catch (error) {
    //         throw new Error(`Hompage >> Login >>Enter  User name  >> Enter Password >>  Login button is not functional : ${Error}`)
    //     }
    // }
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