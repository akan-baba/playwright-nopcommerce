import { test, expect } from "@playwright/test";
import { Environment } from "../../../utils/env/environsUtils.js";
import { DesktopLaptopPage } from "../../../pages/desktop&laptopPage.js"
import {guestMO} from "../../../utils/checkoutActions/guest-money-order.js"

test('TC04_HP Pavilion SE 14" Laptop - Intel® Core', async({page}) => {
    const desktopLaptopPage = new DesktopLaptopPage(page);
    const baseUrl = Environment.getBaseUrl();
    await page.goto(baseUrl);
    await desktopLaptopPage.pageActions.computerLink().first().click();
    await desktopLaptopPage.pageActions.laptopLink().first().click();
    await desktopLaptopPage.pageActions.addToCartBtn().nth(3).click();

    await page.locator('#product_attribute_41').selectOption('141');
    await page.locator('#product_attribute_42').selectOption('145');
    await page.locator('#product_attribute_43').selectOption('150');
    await page.locator('#product_attribute_44').selectOption('154');

    await page.getByLabel("14 Inch 1366 x 768").check();
    await page.getByLabel("Windows 11").check();
    await page.getByLabel("Enter a quantity").fill("200");

    await page.locator('#add-to-cart-button-7').click();
    await desktopLaptopPage.pageActions.shoppingCart().click();
    await expect(page.locator('#termsofservice')).toBeVisible({ timeout: 10000 });
    await page.locator('#termsofservice').click();;
    await desktopLaptopPage.pageActions.checkOutBtn().click();
    await guestMO(page)
    
});