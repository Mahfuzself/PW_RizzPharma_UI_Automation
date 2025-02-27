
import LoginPage from '@pages/login.page';
import { test as baseTest } from '@playwright/test';
import RegisterPage from '@pages/register.page';
import CheckoutPage from '@pages/checkout.page';
const test = baseTest.extend<{
    loginPage: LoginPage;
    registerPage : RegisterPage;
    checkoutPage : CheckoutPage;
   

}>(
    {
        loginPage: async ({page }, use) => {
                    await use(new LoginPage(page));
                },
                registerPage : async({page},use) =>{
                    await use (new RegisterPage(page))
                },
                checkoutPage:async({page},use) =>{
                    await use(new CheckoutPage(page))
                }
              

            },
)
export default test;
export const expect = test.expect;
