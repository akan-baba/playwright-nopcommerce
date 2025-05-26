import { test, expect } from "@playwright/test";
import { Environment } from "../../utils/env/environsUtils";
import { loginPage } from "../../pages/loginPage";
import { assertAnyValidationMessage } from "../../utils/commonActions/validationUtils";


test.describe('Login Test', () => {
    let login;
    test.beforeEach(async ({ page }) => {
        login = new loginPage(page);
        const baseUrl = Environment.getBaseUrl();
        await page.goto(baseUrl);
        await login.pageActions.clickLoginlink().click()
    })

    test('Login with valid credentials', async ({ page }) => {
       await login.pageActions.clickLoginlink().click()
       await login.pageActions.enterUserName().fill('akano72');
       await login.pageActions.enterPassword().fill('red123');
       await login.pageActions.clickLoginBtn().click();
       await login.pageActions.logOut()
    });

    test('Login with empty fields', async ({ page }) => {
        await login.pageActions.clickLoginlink().click()
        await login.pageActions.clickLoginBtn().click()
        await assertAnyValidationMessage(page, 'Login was unsuccessful. Please correct the errors and try again.');
    });

    test('Login with invalid credentials', async ({ page }) => {
       await login.pageActions.clickLoginlink().click()
       await login.pageActions.enterUserName().fill('akano72');
       await login.pageActions.enterPassword().fill('red');
       await login.pageActions.clickLoginBtn().click();
       await assertAnyValidationMessage(page, 'The credentials provided are incorrect');
              
    });

    test('Forgot password with valid email', async ({ page }) => {
        await login.pageActions.clickLoginlink().click()
        await login.pageActions.forgotPwd().click()
        await login.pageActions.enterEmail().fill('victoria_victoria@nopCommerce.com')
        await login.pageActions.recoverBtn().click()
        await expect(login.pageActions.verifyMessage()).toHaveText('Email with instructions has been sent to you.', { timeout: 10000 });

               
     });

     test('Forgot password with invalid email', async ({ page }) => {
        await login.pageActions.clickLoginlink().click()
        await login.pageActions.forgotPwd().click()
        await login.pageActions.enterEmail().fill('victoria@nopCommerce.com')
        await login.pageActions.recoverBtn().click()
        await expect(login.pageActions.verifyMessage()).toHaveText('Email not found.', { timeout: 10000 });

               
     });

})