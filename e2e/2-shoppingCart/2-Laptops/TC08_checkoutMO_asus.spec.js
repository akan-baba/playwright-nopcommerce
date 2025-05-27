import { test, expect } from "@playwright/test";
import { Environment } from "../../../utils/env/environsUtils.js";
import { DesktopLaptopPage } from "../../../pages/desktop&laptopPage.js"
import {guestMO} from "../../../utils/checkoutActions/guest-money-order.js"

test('TC02_ASUS Vivobook S 15 S5504VA Laptop - Intel® Core', async({page}) => {
    const desktopLaptopPage = new DesktopLaptopPage(page);
    const baseUrl = Environment.getBaseUrl();
    await page.goto(baseUrl);
    await desktopLaptopPage.pageActions.computerLink().first().click();
    await desktopLaptopPage.pageActions.laptopLink().first().click();
    await desktopLaptopPage.pageActions.addToCartBtn().nth(1).click();

    await page.locator('#product_attribute_35').selectOption('119');
    await page.locator('#product_attribute_36').selectOption('123');
    await page.locator('#product_attribute_37').selectOption('129');
    await page.locator('#product_attribute_38').selectOption('132');

    await page.getByLabel("14 Inch 1366 x 768").check();
    await page.getByLabel("Windows 11").check();
    await page.getByLabel("Enter a quantity").fill("200");

    await page.locator('#add-to-cart-button-5').click();
    await desktopLaptopPage.pageActions.shoppingCart().click();
    await expect(page.locator('#termsofservice')).toBeVisible({ timeout: 10000 });
    await page.locator('#termsofservice').click();;
    await desktopLaptopPage.pageActions.checkOutBtn().click();
    await guestMO(page)
    
});