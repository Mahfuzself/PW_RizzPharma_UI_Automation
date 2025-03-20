import test,{ expect} from '@fixtures/basepages';
import { Frame, Page } from "@playwright/test";
import ENV from 'utils/env'
test("Login with checkout", async ({ page, homepage }) => {
	await page.goto(ENV.BASE_URL);
    await homepage.clickFindMyTreatment();
    await homepage.assertFindindYourTreatment();
    await homepage.clickAge18To29();
    await homepage.clickNext();
    await homepage.clickMale();
    await homepage.clickNext();
    await homepage.clickEatingHabits();
    await homepage.clickNext();
    await homepage.clickSleepHabits();
    await homepage.clickNext();
    await homepage.clickEnergyLevel()
    await homepage.clickNext();
    await homepage.clickActivityLabel()
    await homepage.clickNext();
    await homepage.clickWeightGoal()
    await homepage.clickNext();
    await homepage.clickOverallGoalsShredFatLooseWeight()
    await homepage.clickNext();
    await homepage.checkRecurringPlanAndClickBuyNow()
    await homepage.assertFindindYourTreatment();


    
});