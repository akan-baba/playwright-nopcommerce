import { test, expect } from "@playwright/test";
import { Environment } from "../../../../utils/env/environsUtils";
import { guestMO} from "../../../../utils/checkoutActions/guest-money-order"
import {clickLinkText} from '../../../../utils/commonActions/links.js'
import { DesktopLaptopPage } from "../../../../pages/desktop&laptopPage.js"

// Guest checkout with credit card

test('TC07-TC03-MOTOROLA Razr 50 Ultra', async({page}) => {
    const baseUrl = Environment.getBaseUrl();
    const desktopLaptopPage = new DesktopLaptopPage(page);
    await page.goto(baseUrl);
    await clickLinkText(page, 'Electronics')
    await page.getByRole('link', { name: 'Picture for category Mobile' }).click();
    await desktopLaptopPage.pageActions.addToCartBtn().nth(2).click();
    await page.getByLabel("Pay monthly").check();
    await page.getByLabel("128GB").check();
    await page.getByLabel("Enter a quantity").fill("50");
    await page.locator('#add-to-cart-button-22').click();
    await desktopLaptopPage.pageActions.shoppingCart().click();
    await expect(page.locator('#termsofservice')).toBeVisible({ timeout: 10000 });
    await page.locator('#termsofservice').click();;
    await desktopLaptopPage.pageActions.checkOutBtn().click();
    await  guestMO(page)
    
});