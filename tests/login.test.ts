
import test,{ expect} from '@fixtures/basepages';
import { Page } from '@playwright/test';
// import test from '@playwright/test';
import { Browser } from 'playwright';
// test.use({ storageState: 'rizz-auth.json' });
test("Check login working successfully from homepage",async({page,loginPage})=>{
    await page.goto("/login")
    // await loginPage.clickLoginBtn();
    await loginPage.inputusernamefield();
    await loginPage.inputpasswordfield();
    await loginPage.ClickSubmit()
    await loginPage.ClickRizzLogo()
    await loginPage.CloseCoupon()
     await page.context().storageState({ path: 'rizz-auth.json' });
    // await page.close()

})
test.describe("Check login working successfully from homepage with cred",()=>{
    // test.beforeEach(async({page,loginPage})=>{
    //     await page.goto("/login")
    //     // await loginPage.clickLoginBtn();
    //     await loginPage.inputusernamefield();
    //     await loginPage.inputpasswordfield();
    //     await loginPage.ClickSubmit()
    //     await loginPage.ClickRizzLogo()
    //     await loginPage.CloseCoupon()
    // })
   test("TC-01 : Check login working successfully from homepage without cred",async({browser})=>{
    const context = await browser.newContext({ storageState: 'rizz-auth.json' });
   const page  = await context.newPage();         
    await page.goto("/login")
    // await loginPage.clickLoginBtn();
    
    // await page.close()

})
test("TC-02 : Check login working successfully from homepage without cred",async({browser})=>{
    const context = await browser.newContext({ storageState: 'rizz-auth.json' });
   const page  = await context.newPage();         
    await page.goto("/login")
    // await loginPage.clickLoginBtn();
    
    // await page.close()

})
})
