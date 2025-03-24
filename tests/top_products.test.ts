import test,{ expect} from '@fixtures/basepages';
import { Page } from '@playwright/test';
import ENV from 'utils/env';
import webHelper from '../helper/webHelper';
test("Verify that product is added to cart from ",async({page,top_productpage})=>{
    const helper = new webHelper(page);
    await page.goto(ENV.BASE_URL)
    await helper.clickNoThanksIfVisible()
    await top_productpage.clickTopProductsDropDown()
    await top_productpage.clickSildenafil()
    await helper.clickAddToCartAndHandleDosage()
   

})