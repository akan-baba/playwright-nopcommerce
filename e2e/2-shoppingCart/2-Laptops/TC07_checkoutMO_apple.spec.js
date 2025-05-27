
import { test, expect } from "@playwright/test";
import { Environment } from "../../../utils/env/environsUtils.js";
import { DesktopLaptopPage } from "../../../pages/desktop&laptopPage.js"
import {guestMO} from "../../../utils/checkoutActions/guest-money-order.js"

test('TC07-APPLE MacBook Air 15" (2025)', async({page}) => {
    const desktopLaptopPage = new DesktopLaptopPage(page);
    const baseUrl = Environment.getBaseUrl();
    await page.goto(baseUrl);
    await desktopLaptopPage.pageActions.computerLink().first().click();
    await desktopLaptopPage.pageActions.laptopLink().first().click();
    await desktopLaptopPage.pageActions.addToCartBtn().nth(0).click();

    await page.locator('#product_attribute_29').selectOption('96');
    await page.locator('#product_attribute_30').selectOption('100');
    await page.locator('#product_attribute_31').selectOption('105');
    await page.locator('#product_attribute_32').selectOption('110');

    await page.getByLabel("14 Inch 1366 x 768").check();
    await page.getByLabel("macOS 13 Ventura").check();
    await page.getByLabel("Enter a quantity").fill("200");

    await page.locator('#add-to-cart-button-4').click();
    await desktopLaptopPage.pageActions.shoppingCart().click();
    await expect(page.locator('#termsofservice')).toBeVisible({ timeout: 10000 });
    await page.locator('#termsofservice').click();;
    await desktopLaptopPage.pageActions.checkOutBtn().click();
    await guestMO(page)
    
});