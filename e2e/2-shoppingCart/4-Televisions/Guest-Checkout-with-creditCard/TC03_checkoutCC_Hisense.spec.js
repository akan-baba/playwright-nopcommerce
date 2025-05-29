import { test, expect } from "@playwright/test";
import { Environment } from "../../../../utils/env/environsUtils";
import {guestCC} from "../../../../utils/checkoutActions/guest-credit-card.js"
import {clickLinkText} from '../../../../utils/commonActions/links.js'
import { DesktopLaptopPage } from "../../../../pages/desktop&laptopPage.js"

test('TC03-Hisense In 55E7NQTUK Pro Smart 4K UHD HDR QLED Freely TV', async({page}) => {
    const baseUrl = Environment.getBaseUrl();
    const desktopLaptopPage = new DesktopLaptopPage(page);
    await page.goto(baseUrl);
    await clickLinkText(page, 'Electronics')
    await page.locator("(//a[normalize-space()='Televisions'])[3]").click();
    await desktopLaptopPage.pageActions.addToCartBtn().nth(2).click();
    await page.getByLabel("70 inch [+£2,500.00]").check();
    await page.getByLabel("Wall Mount Install & Set Up [+£50.00]").check();
    await page.getByLabel("Enter a quantity").fill("500");
    await page.locator('#add-to-cart-button-50').click();
    await desktopLaptopPage.pageActions.shoppingCart().click();
    await expect(page.locator('#termsofservice')).toBeVisible({ timeout: 10000 });
    await page.locator('#termsofservice').click();;
    await desktopLaptopPage.pageActions.checkOutBtn().click();
    await guestCC(page)
    
});