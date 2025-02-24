
import test,{ expect} from '@fixtures/basepages';
import { Page } from '@playwright/test';
import { log } from 'console';
test("Check login working successfully from homepage",async({page,loginPage})=>{
    await page.goto("/login")
    // await loginPage.clickLoginBtn();
    await loginPage.inputusernamefield();
    await loginPage.inputpasswordfield();
    await loginPage.ClickSubmit()
    await loginPage.ClickRizzLogo()

})