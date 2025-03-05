
import test,{ expect} from '@fixtures/basepages';
import { Page } from '@playwright/test';
import { userData } from '@fixtures/fixtures';


test("Complete registration process",async({page,registerPage})=>{
    await page.goto('/Register?returnurl=')
    let firstname = "",lastname="", rendomemail="",fullname = "",email="";
    firstname= await registerPage.generateFirstName();
    lastname = await registerPage.generateLastName()
    email =firstname+lastname+"@yopmail.com"

    await registerPage.clickSignupBtn()
    await registerPage.inputuserEmail(email)
    await registerPage.inputFirstName(firstname)
    await registerPage.inputLastName(lastname)
    await registerPage.inputDisplayName(firstname,lastname)
    await registerPage.inputPhoneNumber()
    await registerPage.inputDateOfBirth()
    await registerPage.inputpasswordfield()
    await registerPage.inputConfirmpasswordfield()
    await registerPage.ClickSubmit()
    await page.close()

})