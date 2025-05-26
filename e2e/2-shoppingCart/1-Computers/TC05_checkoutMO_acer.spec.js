import { test, expect } from "@playwright/test";
import { Environment } from "../../../utils/env/environsUtils.js";
import { DesktopLaptopPage } from "../../../pages/desktop&laptopPage.js"
import {guestMO} from "../../../utils/checkoutActions/guest-money-order.js"

test('TC01-ACER Aspire TC-1785 Desktop PC', async({page}) => {
    const desktopLaptopPage = new DesktopLaptopPage(page);
    const baseUrl = Environment.getBaseUrl();
    await page.goto(baseUrl);
    await desktopLaptopPage.pageActions.computerLink().first().click();
    await desktopLaptopPage.pageActions.desktopLink().first().click();
    await desktopLaptopPage.pageActions.addToCartBtn().first().click();

    await page.locator('#product_attribute_14').selectOption('38');
    await page.locator('#product_attribute_15').selectOption('42');
    await page.locator('#product_attribute_16').selectOption('47');
    await page.locator('#product_attribute_17').selectOption('50');

    await page.getByLabel("Windows 10").check();
    await page.getByLabel("Enter a quantity").fill("200");

    await page.locator('#add-to-cart-button-1').click();
    await desktopLaptopPage.pageActions.shoppingCart().click();
    await expect(page.locator('#termsofservice')).toBeVisible({ timeout: 10000 });
    await page.locator('#termsofservice').click();;
    await desktopLaptopPage.pageActions.checkOutBtn().click();
    await guestMO(page)
    
});