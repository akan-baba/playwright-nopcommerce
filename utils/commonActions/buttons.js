export async function clickCheckOutBtn(page) {
    await page.click('.checkout-buttons');
  }

  export async function getRadioButton(page) {
    return page.locator('[type="radio"]');
  }

  export async function clickShoppingCart(page) {
    await page.click('.cart-qty');
  }