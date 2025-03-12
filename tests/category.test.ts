import test,{ expect} from '@fixtures/basepages';
import { Page } from '@playwright/test';
import categoryPage from '../pages/categoryPage/category.page';
test("check Athletic Performance category working successfully",async({page,categoryPage})=>{
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
test("Check beauty and hairloss category working successfully", async ({ page, categoryPage }) => {
    await page.goto("https://rizzpharma.thrivewellrx.com/");
    await page.getByRole('button', { name: 'No Thanks' }).click();
    await page.getByRole('button', { name: 'Category ' }).click();
    await page.getByRole('link', { name: 'Beauty and Hair Loss' }).click();
    await page.locator('button:nth-child(2)').first().click();
    await page.getByRole('button', { name: '' }).click();
    await page.waitForTimeout(4000);
    await expect(page.getByText('Complete Your')).toBeVisible();
    await page.getByText('Order').click();
    await page.getByText('Need Assistance? Contact us').click();
    await page.getByText('Lyopholized Finasteride 1mg $').click();
    await page.getByRole('button', { name: 'Proceed to Checkout' }).click();
    await page.getByRole('textbox', { name: 'Search State' }).click();
    await page.getByRole('textbox', { name: 'Search State' }).fill('Texas');
    await page.getByText('Texas').click();
    await page.getByRole('button', { name: 'Yes' }).click();
    await page.waitForTimeout(2000);
    await page.getByRole('textbox', { name: 'Email Address:' }).fill('mahfuz@yopmail.com');
    await page.getByRole('textbox', { name: 'Password:' }).click();
    await page.getByRole('textbox', { name: 'Password:' }).fill('Test@1234');
    await page.getByRole('link', { name: 'Login' }).click();
    await page.waitForTimeout(5000);

    const frameLocator = page.frameLocator('iframe[name^="__privateStripeFrame"]').nth(0); // Adjust the index as needed
    // await frameLocator.locator('input[name="cardnumber"]').waitFor();
    await frameLocator.getByRole('textbox', { name: 'Card number' }).click();
    await frameLocator.getByRole('textbox', { name: 'Card number' }).fill('4242 4242 4242 4242');
    await frameLocator.getByRole('textbox', { name: 'Expiration date MM / YY' }).fill('04 / 26');
    await frameLocator.getByRole('textbox', { name: 'Security code' }).fill('567');
    await frameLocator.getByLabel('Country').selectOption('US');
    await frameLocator.getByRole('textbox', { name: 'ZIP code' }).click();
    await frameLocator.getByRole('textbox', { name: 'ZIP code' }).fill('70551');

    await page.locator('#payment-form span').nth(1).click();
    await page.getByTitle('Shipping name is required').click();
    await page.getByTitle('Shipping name is required').fill('mahfuz');
    await page.getByRole('textbox', { name: 'Shipping address is required' }).click();
    await page.getByRole('textbox', { name: 'Shipping address is required' }).fill('141');
    await page.getByText('North Loop West').click();
    await page.getByRole('textbox', { name: 'Email Address  Email Address' }).click();
    await page.getByRole('textbox', { name: 'Email Address  Email Address' }).fill('mahfuz@yopmail.com');
    await page.locator('label').filter({ hasText: 'Same as shipping Information' }).locator('span').nth(1).click();
    await page.getByRole('button', { name: 'Next' }).click();
//     await page.getByRole('button', { name: 'Upload Documents' }).click();
//     await page.getByText('Browse Files').click();
// //    await page.getByRole('button', { name: 'No Thanks' }).click();

//     // await page.getByText('Browse Files').click();
//     await page.locator('#Body').setInputFiles('d:\\SQA\\RL\\Automation\\PW_RizzPharma_UI_Automation\\testData\\images\\Front.png'); 
//     await page.waitForTimeout(3000)
//     await page.getByRole('button', { name: 'Driving license back part ' }).click();
//     await page.getByRole('listitem').filter({ hasText: 'Driving license front part' }).locator('a').click();
//     await page.getByRole('button', { name: 'Save' }).click();
//     await page.getByRole('button', { name: 'Select a report type ' }).click();
//     await page.getByRole('listitem').filter({ hasText: 'Driving license front part' }).locator('a').click();
//     await page.getByRole('button', { name: 'Save' }).click();
//     await page.getByRole('button', { name: 'Okay' }).click();
});