import { test, expect } from "@playwright/test";
import { Environment } from "../../utils/env/environsUtils";
import { UserRegistrationPage } from "../../pages/userRegistrationPage";
import { faker } from "@faker-js/faker";
const email = faker.internet.email();
const firstname = faker.person.firstName();
const lastname = faker.person.lastName();
const username = faker.internet.userName()

test("Customer Registration", async ({ page }) => {
  const userRegistration = new UserRegistrationPage(page);
  const baseUrl = Environment.getBaseUrl();
  await page.goto(baseUrl);

  await userRegistration.pageActions.clickRegistrationLink().click();
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
   
 
});
