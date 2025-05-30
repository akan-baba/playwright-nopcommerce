import { test, expect } from "@playwright/test";
import { UserRegistrationPage } from "../../pages/userRegistrationPage";
import { faker } from "@faker-js/faker";
const email = faker.internet.email();
const firstname = faker.person.firstName();
const lastname = faker.person.lastName();
const username = faker.internet.userName()

// Export the checkPage function
module.exports = {
  newUserRegistrationCC: async (page) => {
    const userRegistration = new UserRegistrationPage(page);
    await page.locator('.button-1.register-button').click()
    await userRegistration.pageActions.clickGenderFemale().click();
    await userRegistration.pageActions.enterFirstName().fill(firstname);
    await userRegistration.pageActions.enterLastName().fill(lastname);
    await userRegistration.pageActions.selectDobDay().selectOption('6')
    await userRegistration.pageActions.selectDobMonth().selectOption('11')
    await userRegistration.pageActions.selectDobYear().selectOption('1959')
    await userRegistration.pageActions.enterEmail().fill(email);
    await userRegistration.pageActions.enterUserName().fill(username);
    await userRegistration.pageActions.enterStreetAddress().fill('123 Main St');
    await userRegistration.pageActions.enterZipCode().fill('M16 7RJ');
    await userRegistration.pageActions.enterCounty().fill('Greater Manchester');
    await userRegistration.pageActions.enterCity().fill('Manchy')
    await userRegistration.pageActions.selectCountry().selectOption('235')
    await userRegistration.pageActions.selectState().selectOption('628')
    await userRegistration.pageActions.enterPhone().fill('07912345678')
    await userRegistration.pageActions.enterPassword().fill('password123');
    await userRegistration.pageActions.enterConfirmPassword().fill('password123');
    await userRegistration.pageActions.clickPrivacyPolicy().click();
    await userRegistration.pageActions.clickRegisterButton().click();
    await page.locator('.button-1.register-continue-button').click()
    await page.locator('#termsofservice').click();;
    await page.locator('#checkout').click()
    await page.locator("button[onclick='Billing.save()']").click()
    await page.locator('.button-1.shipping-method-next-step-button').click()
    await page.locator('#paymentmethod_1').click()
    await page.locator("button[class='button-1 payment-method-next-step-button']").click()
    await page.locator('#CardholderName').fill('Joe Doe')
    await page.locator('#CardNumber').fill('5555 5555 5555 4444')
    await page.locator('#ExpireMonth').selectOption('06')
    await page.locator('#ExpireYear').selectOption('2039')
    await page.locator('#CardCode').fill('436')
    await page.locator('.button-1.payment-info-next-step-button').click()
    await page.locator('.button-1.confirm-order-next-step-button').click()
    await expect(
      page.locator("div.section.order-completed div.title strong")
    ).toHaveText('Your order has been successfully processed!');

  },
};
