// Import necessary modules from Playwright and Faker
/// <reference types="@playwright/test" />

const { test, expect } = require('@playwright/test');
const { faker } = require('@faker-js/faker');

// Generate random user data using Faker
const email = faker.internet.email();
const firstname = faker.person.firstName();
const lastname = faker.person.lastName();

// Export the checkPage function
module.exports = {
  guestCC: async (page) => {
    // Click on the "Checkout as Guest" button
    await page.locator('.button-1.checkout-as-guest-button').click()
    await page.locator('#BillingNewAddress_FirstName').fill(firstname)
    await page.locator('#BillingNewAddress_LastName').fill(lastname)
    await page.locator('#BillingNewAddress_Email').fill(email)
    await page.locator('#BillingNewAddress_CountryId').selectOption('235')
    await page.locator('#BillingNewAddress_StateProvinceId').selectOption('628') 
    await page.locator('#BillingNewAddress_City').fill('Manchy')
    await page.locator('#BillingNewAddress_Address1').fill('2 Grange Road')
    await page.locator('#BillingNewAddress_ZipPostalCode').fill('M16 7RJ')
    await page.locator('#BillingNewAddress_PhoneNumber').fill('01662578956')
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
