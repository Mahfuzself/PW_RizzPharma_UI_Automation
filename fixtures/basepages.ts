
import LoginPage from '@pages/login.page';
import { test as baseTest } from '@playwright/test';
import RegisterPage from '@pages/register.page';
const test = baseTest.extend<{
    loginPage: LoginPage;
    registerPage : RegisterPage;
    // userData : userData;
    // clientsPage : companyPage;
    // employeeuserPage : companyPage;
    // brokerPage : brokerPage;
    // AlignwellPage : AlignwelluserPage;
    // ContactorPage : ContractorPage;
    // HealthcareProviderPage : HealthcareProviderPage;
    // companyPage : companyPage;
    // masteradminPage : masteradminPage;
    // standardPage : standardPage
    // vendorportalPage : vendorportalPage
    // vendoradminPage : vendoradminPage
    // registrationPage : userRegistrationPage

}>(
    {
        loginPage: async ({page }, use) => {
                    await use(new LoginPage(page));
                },
                registerPage : async({page},use) =>{
                    await use (new RegisterPage(page))
                },
                // clientsPage : async({page},use) =>{
                //     await use (new companyPage(page))
                // },
                // employeeuserPage : async({page},use) =>{
                //     await use (new companyPage(page))
                // },
                // brokerPage : async({page},use) =>{
                //     await use (new brokerPage(page))
                // },
                // AlignwellPage : async({page},use) =>{
                //     await use (new AlignwelluserPage(page))
                // },
                // ContactorPage : async({page},use) =>{
                //     await use (new ContractorPage(page))
                // },
                // HealthcareProviderPage : async({page},use) =>{
                //     await use (new HealthcareProviderPage(page))
                // },
                // companyPage : async({page},use) =>{
                //     await use (new companyPage(page))
                // },
                // masteradminPage : async({page},use) =>{
                //     await use (new masteradminPage(page))
                // },
                // standardPage : async({page},use) =>{
                //     await use (new standardPage(page))
                // },
                // vendorportalPage : async({page},use) =>{
                //     await use (new vendorportalPage(page))
                // },
                // vendoradminPage : async({page},use) =>{
                //     await use (new vendoradminPage(page))
                // },
                // registrationPage :async ({page},use) => {
                //     await use (new userRegistrationPage(page))
                // }

            },
)
export default test;
export const expect = test.expect;
