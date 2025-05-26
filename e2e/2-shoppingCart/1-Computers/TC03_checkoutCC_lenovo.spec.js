import { test, expect } from "@playwright/test";
import { Environment } from "../../../utils/env/environsUtils.js";
import { DesktopLaptopPage } from "../../../pages/desktop&laptopPage.js"
import {guestCC} from "../../../utils/checkoutActions/guest-credit-card.js"

test('TC03-LENOVO IdeaCentre AIO 27" All-in-One', async({page}) => {
    const desktopLaptopPage = new DesktopLaptopPage(page);
        const baseUrl = Environment.getBaseUrl();
        await page.goto(baseUrl);
        await desktopLaptopPage.pageActions.computerLink().first().click();
        await desktopLaptopPage.pageActions.desktopLink().first().click();
        await desktopLaptopPage.pageActions.addToCartBtn().nth(2).click();

        await page.locator('#product_attribute_24').selectOption('76');
        await page.locator('#product_attribute_25').selectOption('80');
        await page.locator('#product_attribute_26').selectOption('85');
        await page.locator('#product_attribute_27').selectOption('89');

        await page.getByLabel("Windows Server 2022").check();
        await page.getByLabel("Enter a quantity").fill("100");

        await page.locator('#add-to-cart-button-3').click();
        await desktopLaptopPage.pageActions.shoppingCart().click();
        await page.locator('#termsofservice').click();;
        await desktopLaptopPage.pageActions.checkOutBtn().click();
        await guestCC(page)
});