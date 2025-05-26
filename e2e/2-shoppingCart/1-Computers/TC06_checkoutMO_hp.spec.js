import { test, expect } from "@playwright/test";
import { Environment } from "../../../utils/env/environsUtils.js";
import { DesktopLaptopPage } from "../../../pages/desktop&laptopPage.js"
import {guestMO} from "../../../utils/checkoutActions/guest-money-order.js"

test('TC02-HP Pavilion 24-cr1007na 23.8" All-in-One PC', async({page}) => {
    const desktopLaptopPage = new DesktopLaptopPage(page);
        const baseUrl = Environment.getBaseUrl();
        await page.goto(baseUrl);
        await desktopLaptopPage.pageActions.computerLink().first().click();
        await desktopLaptopPage.pageActions.desktopLink().first().click();
        await desktopLaptopPage.pageActions.addToCartBtn().nth(1).click();

        await page.locator('#product_attribute_19').selectOption('57');
        await page.locator('#product_attribute_20').selectOption('61');
        await page.locator('#product_attribute_21').selectOption('66');
        await page.locator('#product_attribute_22').selectOption('70');

        await page.getByLabel("Windows 11").check();
        await page.getByLabel("Enter a quantity").fill("150");

        await page.locator('#add-to-cart-button-2').click();
        await desktopLaptopPage.pageActions.shoppingCart().click();
        await expect(page.locator('#termsofservice')).toBeVisible({ timeout: 10000 });
        await page.locator('#termsofservice').click();;
        await desktopLaptopPage.pageActions.checkOutBtn().click();
        await guestMO(page)
});