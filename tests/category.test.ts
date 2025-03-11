import test,{ expect} from '@fixtures/basepages';
import { Page } from '@playwright/test';
import categoryPage from '../pages/categoryPage/category.page';
test("check category page working successfully",async({page,categoryPage})=>{
    await page.goto("https://rizzpharma.thrivewellrx.com/")
    await page.getByRole('button', { name: 'No Thanks' }).click();
    await page.getByRole('button', { name: 'Category ' }).click();
    await page.getByRole('link', { name: 'Athletic Performance' }).click();
    await page.getByRole('button', { name: 'Get Started' }).click();
    await page.getByRole('listitem').filter({ hasText: 'Home' }).click();
    await page.getByRole('button', { name: 'Category ' }).click();
    await page.getByRole('link', { name: 'Athletic Performance' }).click();
    await page.locator('button:nth-child(2)').first().click();
    await page.getByRole('button', { name: 'I Agree' }).click();
    await page.getByRole('button', { name: '' }).click();
})