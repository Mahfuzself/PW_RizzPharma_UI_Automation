import path from "path";
import { Page } from "playwright";
import fs from "fs";
import * as XLSX from "xlsx";
export default class docmedilinkLoginPage{
       docpage: Page;
        // static login: any;
        constructor(docpage: Page) {
            this.docpage = docpage;
        }
         
        private LoginPageElements = {
            email: "//input[@type='email']",
            password: "//input[@type='password']",
            loginButton: "(//button[@type='submit']//span)[1]",
            // loginSuccess: 'div[class="alert alert-success"]',
            // loginError: 'div[class="alert alert-danger"]',
        };
        async login() {
            await this.docpage.fill(this.LoginPageElements.email, "rl_mahfuzalam@yopmail.com");
            await this.docpage.fill(this.LoginPageElements.password,"Test@1234");
            await this.docpage.click(this.LoginPageElements.loginButton);
            await this.docpage.waitForTimeout(5000);
            // await this.docpage.waitForSelector(this.LoginPageElements.loginSuccess);
        }
        
        // Function to write data to Excel file
        // async  writeDataToExcel(Firstname: string, Lastname: string, password: string, email: string) {
        //     const filePath = path.join(__dirname, 'utils', 'workbook.xlsx');
        //     const folderPath = path.dirname(filePath); // Get the directory path of the file
          
        //     // Ensure the 'utils' folder exists
        //     if (!fs.existsSync(folderPath)) {
        //       fs.mkdirSync(folderPath, { recursive: true }); // Create the 'utils' folder if it doesn't exist
        //       console.log(`Created folder: ${folderPath}`);
        //     }
          
        //     // Read the existing file if it exists, else create a new one
        //     let workbook;
        //     try {
        //       workbook = XLSX.readFile(filePath);
        //     } catch (error) {
        //       // If the file doesn't exist, create a new workbook
        //       workbook = XLSX.utils.book_new();
        //     }
          
        //     // Access or create a sheet
        //     let worksheet = workbook.Sheets['Sheet1'];
        //     if (!worksheet) {
        //       // If the sheet does not exist, create it with the header row
        //       worksheet = XLSX.utils.aoa_to_sheet([['FirstName', 'LastName', 'Password', 'Email']]); // Header row
        //       XLSX.utils.book_append_sheet(workbook, worksheet, 'Sheet1');
        //     }
          
        //     // Prepare the new data row (without headers)
        //     const newData = [Firstname, Lastname, password, email];
          
        //     // Find the last row to append new data
        //     const range = XLSX.utils.decode_range(worksheet['!ref'] || 'A1'); // Find the current range of data
        //     const startRow = range.e.r + 1; // Next row to start appending data
          
        //     // Write the new data into the next available row
        //     newData.forEach((cell, colIndex) => {
        //       const cellAddress = { r: startRow, c: colIndex }; // Next row and column index
        //       const cellRef = XLSX.utils.encode_cell(cellAddress);
        //       worksheet[cellRef] = { v: cell };
        //     });
          
        //     // Update the worksheet reference range to include the new row
        //     worksheet['!ref'] = XLSX.utils.encode_range({
        //       s: { r: 0, c: 0 },
        //       e: { r: startRow, c: newData.length - 1 },
        //     });
          
        //     // Write the updated data back to the Excel file
        //     await XLSX.writeFile(workbook, filePath);
        //     console.log('Data written to Excel file successfully!');
        //   }
        async  writeDataToExcel(Firstname: string, Lastname: string, password: string, email: string) {
            // Path to the global utils folder in the root of the project
            const filePath = path.join(__dirname, '..', '..', 'utils', 'workbook.xlsx');
            const folderPath = path.dirname(filePath); // Get the directory path of the file
          
            // Ensure the 'utils' folder exists (create it if it doesn't exist)
            if (!fs.existsSync(folderPath)) {
              fs.mkdirSync(folderPath, { recursive: true }); // Create the 'utils' folder if it doesn't exist
              console.log(`Created folder: ${folderPath}`);
            }
          
            // Read the existing file if it exists, else create a new one
            let workbook;
            try {
              workbook = XLSX.readFile(filePath);
            } catch (error) {
              // If the file doesn't exist, create a new workbook
              workbook = XLSX.utils.book_new();
            }
          
            // Access or create a sheet
            let worksheet = workbook.Sheets['Sheet1'];
            if (!worksheet) {
              // If the sheet does not exist, create it with the header row
              worksheet = XLSX.utils.aoa_to_sheet([['FirstName', 'LastName', 'Password', 'Email']]); // Header row
              XLSX.utils.book_append_sheet(workbook, worksheet, 'Sheet1');
            }
          
            // Prepare the new data row (without headers)
            const newData = [Firstname, Lastname, password, email];
          
            // Find the last row to append new data
            const range = XLSX.utils.decode_range(worksheet['!ref'] || 'A1'); // Find the current range of data
            const startRow = range.e.r + 1; // Next row to start appending data
          
            // Write the new data into the next available row
            newData.forEach((cell, colIndex) => {
              const cellAddress = { r: startRow, c: colIndex }; // Next row and column index
              const cellRef = XLSX.utils.encode_cell(cellAddress);
              worksheet[cellRef] = { v: cell };
            });
          
            // Update the worksheet reference range to include the new row
            worksheet['!ref'] = XLSX.utils.encode_range({
              s: { r: 0, c: 0 },
              e: { r: startRow, c: newData.length - 1 },
            });
          
            // Write the updated data back to the Excel file
            await XLSX.writeFile(workbook, filePath);
            console.log('Data written to Excel file successfully!');
          }
        
        // Example usage
        // writeDataToExcel('John', 'Doe', 'password123', 'john.doe@example.com')
        //   .catch(err => console.error('Error writing to Excel file:', err
            


}