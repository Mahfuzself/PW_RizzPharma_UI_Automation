
import LoginPage from '@pages/login.page';
import { test as baseTest } from '@playwright/test';
import RegisterPage from '@pages/register.page';
import CheckoutPage from '@pages/checkout.page';
import categoryPage from '@pages/category.page';
const test = baseTest.extend<{
    loginPage: LoginPage;
    registerPage : RegisterPage;
    checkoutPage : CheckoutPage;
    categoryPage : categoryPage
   

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
                },
                categoryPage:async({page},use)=>{
                    await use(new categoryPage(page))
                }
              

            },
)
export default test;
export const expect = test.expect;
