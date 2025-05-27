import { test, expect } from "@playwright/test";
import { Environment } from "../../../utils/env/environsUtils.js";
import { DesktopLaptopPage } from "../../../pages/desktop&laptopPage.js"
import {guestCC} from "../../../utils/checkoutActions/guest-credit-card.js"

test('TC06_SAMSUNG Galaxy Book4 15.6" Laptop - Intel® Core', async({page}) => {
    const desktopLaptopPage = new DesktopLaptopPage(page);
    const baseUrl = Environment.getBaseUrl();
    await page.goto(baseUrl);
    await desktopLaptopPage.pageActions.computerLink().first().click();
    await desktopLaptopPage.pageActions.laptopLink().first().click();
    await desktopLaptopPage.pageActions.addToCartBtn().nth(5).click();

    await page.locator('#product_attribute_47').selectOption('163');
    await page.locator('#product_attribute_48').selectOption('168');
    await page.locator('#product_attribute_49').selectOption('173');
    await page.locator('#product_attribute_50').selectOption('177');

    await page.getByLabel("14 Inch 1366 x 768").check();
    await page.getByLabel("Windows 11").check();
    await page.getByLabel("Enter a quantity").fill("200");

    await page.locator('#add-to-cart-button-8').click();
    await desktopLaptopPage.pageActions.shoppingCart().click();
    await expect(page.locator('#termsofservice')).toBeVisible({ timeout: 10000 });
    await page.locator('#termsofservice').click();;
    await desktopLaptopPage.pageActions.checkOutBtn().click();
    await guestCC(page)
    
});