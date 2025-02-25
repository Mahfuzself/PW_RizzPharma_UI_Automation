export const generateRandomString = (length: number = 8): string => {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
  };
  
  // Generate a random name
  export const generateRandomName = (): string => {
    const firstNames = ['John', 'Jane', 'Alice', 'Bob', 'Charlie'];
    const lastNames = ['Doe', 'Smith', 'Johnson', 'Lee', 'Williams'];
    const randomFirstName = firstNames[Math.floor(Math.random() * firstNames.length)];
    const randomLastName = lastNames[Math.floor(Math.random() * lastNames.length)];
    return `${randomFirstName} ${randomLastName}`;
  };
  
  // Generate a random email
  export const generateRandomEmail = (): string => {
    return generateRandomString(8) + '@yopmail.com';
  };
  
  // Generate a random phone number
  export const generateRandomPhone = (): string => {
    return `+1${Math.floor(Math.random() * 900000000) + 100000000}`;
  };
  