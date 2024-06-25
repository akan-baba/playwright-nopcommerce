// Import necessary modules from Playwright and Faker
const { expect } = require('@playwright/test');
const { faker } = require('@faker-js/faker');

// Generate random user data using Faker
const email = faker.internet.email();
const firstname = faker.person.firstName();
const lastname = faker.person.lastName();

// Export the checkPage function
module.exports = {
  checkPage: async (page) => {
    // Click on the "Checkout as Guest" button
    await page.getByRole('textbox', { name: 'First name *' }).fill(firstname);
    await page.getByRole('textbox', { name: 'Last name *' }).fill(lastname);
    await page.getByRole('textbox', { name: 'Street address *' }).fill('Moss Grange Avnue');
    await page.getByRole('textbox', { name: 'Town / City *' }).fill('Manchester');
    await page.getByRole('textbox', { name: 'Postcode *' }).fill('M1 4JG');
    await page.getByLabel('Phone *').fill('016122251085');
    await page.getByLabel('Email address *').fill(email);
    await page.getByPlaceholder('Password').fill('new57hue');
    await page.getByText('Cash on delivery Pay with').click();
    await page.getByRole('button', { name: 'Place order' }).click();

  },
};
