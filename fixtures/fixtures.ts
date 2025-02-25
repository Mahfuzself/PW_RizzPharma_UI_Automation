import { test as baseTest, expect, Page } from '@playwright/test';
import { generateRandomName, generateRandomEmail, generateRandomPhone } from './randomData';
interface fixtures {
    userData:  {
      name: String;
      email: String;
      phone: String;
    };
  }
  // interface fixtures {
  //   userData: Use
  // }

// Define the fixture for random data
const fixture = baseTest.extend<fixtures>({
    userData: async ({}, use) => {
      // Generate random user data
      const randomName = generateRandomName();
      const randomEmail = generateRandomEmail();
      const randomPhone = generateRandomPhone();
  
      // Prepare the user data object
     const userData  = {
        name: randomName,
        email: randomEmail,
        phone: randomPhone,
      };
  
      // Pass the userData to the test
      await use(userData);
    },
  });
  
  // Export the fixture with custom typing
  export const userData = fixture;

export { expect };
