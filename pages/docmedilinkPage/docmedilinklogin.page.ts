import { Page } from "playwright";
export default class docmedilinkLoginPage{
     private docpage: Page;
        // static login: any;
        constructor(docpage: Page) {
            this.docpage = docpage;
        }
        private LoginPageElements = {
            email: "//input[@type='email']",
            password: "//input[@type='password']",
            loginButton: "(//button[@type='submit']//span)[1]",
            // loginSuccess: 'div[class="alert alert-success"]',
            // loginError: 'div[class="alert alert-danger"]',
        };
        async login() {
            await this.docpage.fill(this.LoginPageElements.email, "rl_mahfuzalam@yopmail.com");
            await this.docpage.fill(this.LoginPageElements.password,"Test@1234");
            await this.docpage.click(this.LoginPageElements.loginButton);
            await this.docpage.waitForTimeout(5000);
            // await this.docpage.waitForSelector(this.LoginPageElements.loginSuccess);
        }

}