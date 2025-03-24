

import LoginPage from '@pages/login.page';
import { test as baseTest } from '@playwright/test';
import RegisterPage from '@pages/register.page';
import CheckoutPage from '@pages/checkout.page';
import categoryPage from '@pages/category.page';
import docmedilinkLoginPage from '@pages/docmedilinklogin.page';
import homePage from '@pages/home.page';
import top_ProductPage from "@pages/top_Products.page";

const test = baseTest.extend<{
    loginPage: LoginPage;
    registerPage : RegisterPage;
    checkoutPage : CheckoutPage;
    categoryPage : categoryPage;
    docmedilinkloginPage : docmedilinkLoginPage;
    homepage : homePage;
    top_productpage : top_ProductPage;
    
   

}>( {
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
                },
                docmedilinkloginPage:async({page},use)=>{
                    await use(new docmedilinkLoginPage(page))
            },
            homepage:async({page},use)=>{
                await use(new homePage(page))
            },
            top_productpage:async({page},use)=>{
                await use(new top_ProductPage(page))
            },
})

export default test;
export const expect = test.expect;
