
import {Page,expect} from '@playwright/test';
export default class RegisterPage {
    private page: Page;
    // static login: any;
    constructor(page: Page) {
        this.page = page;
    }
    private RegisterPage_Elements  ={
        signup:'//a[text()="Sign Up"]',
        email : "(//label[contains(.,'Email Address:')]/following::input)[1]",
        firstName : "(//label[contains(.,'First Name:')]/following::input)[1]",
        lastName: "(//label[contains(.,'Last Name:')]/following::input)[1]",
        RizzLogo: "//a[@class='site__logo']//img[1]",
        displayName: "(//label[contains(.,'Display Name:')]/following::input)[1]",
        phonenumber: "(//label[contains(.,'Cell/Mobile:')]/following::input)[1]",
        dob: "(//label[contains(.,'Date of birth')]/following::input)[1]",
        password: "(//span[normalize-space(text())='Enter your password.']/following::input)[1]",
        confirmPassword: "(//label[contains(.,'Confirm Password:')]/following::input)[1]",
        Register:"//a[normalize-space(text())='Register']"
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
    async clickSignupBtn(){
        const ele = await this.page.locator(this.RegisterPage_Elements.signup)
        try {
            await ele.click({button :'left',delay:1000})
        } catch (error) {
            throw new Error(`Hompage >> SignUp is not navigated from homepage : ${Error}`)
        }
    }
    async inputuserEmail(Useremail : any){
        const ele = await this.page.locator(this.RegisterPage_Elements.email)
        try {
            await ele.type(Useremail)
        } catch (error) {
            throw new Error(`Hompage >> Login >> User email field is not functional : ${Error}`)
        }
    }
    async inputFirstName(UserFirstName : any){
        const ele = await this.page.locator(this.RegisterPage_Elements.firstName)
        try {
            await ele.type(UserFirstName)
        } catch (error) {
            throw new Error(`Hompage >> Login >> First Name User field is not functional : ${Error}`)
        }
    }
    async inputLastName(UserLastName : any){
        const ele = await this.page.locator(this.RegisterPage_Elements.lastName)
        try {
            await ele.type(UserLastName)
        } catch (error) {
            throw new Error(`Hompage >> Login >> Last Name User field is not functional : ${Error}`)
        }
    }
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
    async generateLastName(){
        let name2 = ["Anderson", "Ashwoon", "Aikin", "Bateman", "Bongard", "Bowers", "Boyd", "Cannon", "Cast", "Deitz", "Dewalt", "Ebner", "Frick", "Hancock", "Haworth", "Hesch", "Hoffman", "Kassing", "Knutson", "Lawless", "Lawicki", "Mccord", "McCormack", "Miller", "Myers", "Nugent", "Ortiz", "Orwig", "Ory", "Paiser", "Pak", "Pettigrew", "Quinn", "Quizoz", "Ramachandran", "Resnick", "Sagar", "Schickowski", "Schiebel", "Sellon", "Severson", "Shaffer", "Solberg", "Soloman", "Sonderling", "Soukup", "Soulis", "Stahl", "Sweeney", "Tandy", "Trebil", "Trusela", "Trussel", "Turco", "Uddin", "Uflan", "Ulrich", "Upson", "Vader", "Vail", "Valente", "Van Zandt", "Vanderpoel", "Ventotla", "Vogal", "Wagle", "Wagner", "Wakefield", "Weinstein", "Weiss", "Woo", "Yang", "Yates", "Yocum", "Zeaser", "Zeller", "Ziegler", "Bauer", "Baxster", "Casal", "Cataldi", "Caswell", "Celedon", "Chambers", "Chapman", "Christensen", "Darnell", "Davidson", "Davis", "DeLorenzo", "Dinkins", "Doran", "Dugelman", "Dugan", "Duffman", "Eastman", "Ferro", "Ferry", "Fletcher", "Fietzer", "Hylan", "Hydinger", "Illingsworth", "Ingram", "Irwin", "Jagtap", "Jenson", "Johnson", "Johnsen", "Jones", "Jurgenson", "Kalleg", "Kaskel", "Keller", "Leisinger", "LePage", "Lewis", "Linde"];
        let lastname =  await this.capFirst(name2[ await this.getRandomInt(0, name2.length + 1)])
        return lastname
        
    }
    async inputpasswordfield(){
        const ele = await this.page.locator(this.RegisterPage_Elements.password)
        try {
            await ele.click()
            await ele.type("Test@1234")
        } catch (error) {
            throw new Error(`Hompage >> Login >>Enter  User name  >> Enter Password >>  Passwordfield is not functional : ${Error}`)
        }
    }
    async inputConfirmpasswordfield(){
        const ele = await this.page.locator(this.RegisterPage_Elements.confirmPassword)
        try {
            await ele.type("Test@1234")
        } catch (error) {
            throw new Error(`Hompage >> Login >>Enter  User name  >> Enter Password >> Confirm  Passwordnfield is not functional : ${Error}`)
        }
    }
    async inputPhoneNumber(){
        const ele = await this.page.locator(this.RegisterPage_Elements.phonenumber)
        try {
            await ele.type("4133248551")
        } catch (error) {
            throw new Error(`Hompage >> Login >>Enter  User name  >> Enter Confirm  Password >> Confirm password field is not functional : ${Error}`)
        }
    }
    async inputDateOfBirth(){
        const ele = await this.page.locator(this.RegisterPage_Elements.dob)
        try {
            await ele.type("Feb 04, 2007")
        } catch (error) {
            throw new Error(`Hompage >> Login >>Enter  User name  >> Enter Date of Birth >> DOB field is not functional : ${Error}`)
        }
    }
    async inputDisplayName(firstName : any , lastName : any){
        const ele = await this.page.locator(this.RegisterPage_Elements.displayName)
        try {
            await ele.type(firstName+lastName)
        } catch (error) {
            throw new Error(`Hompage >> Login >>Enter  User name  >> Enter Display Name >> Display Name field is not functional : ${Error}`)
        }
    }
    async ClickSubmit(){
        const ele = await this.page.locator(this.RegisterPage_Elements.Register)
        try {
            await ele.click()
            await this.page.waitForTimeout(10000)
        } catch (error) {
            throw new Error(`Hompage >> Login >>Enter  User name  >>Enter Register button>>  register button is not functional : ${Error}`)
        }
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