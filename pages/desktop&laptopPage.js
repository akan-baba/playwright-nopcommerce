export class DesktopLaptopPage {
  constructor(page) {
      console.log("Page object in constructor:", page); // Log to check page object
      this.page = page; // Ensure page is properly assigned here
  }

  get webSelectors() {
      return {
          computerLink: "a:text('Computers')",
          desktopLink: "#main a:text('Desktops')",
          laptopLink: "#main a:text('Laptops')",
          addToCartBtn: ".button-2.product-box-add-to-cart-button",
          win10RadioBtn: "Windows 10",
          window11RadioBtn: "Windows 11",
          linuxRadioBtn: "Linux",
          quantityField: "#product_enteredQuantity_1",
          addToBasketBtn: "#add-to-cart-button-1",
          shoppingCart: ".cart-label",
          termsOfService: "#termsofservice",
          checkOutBtn: "#checkout",
      };
  }

  get pageActions() {
      return {
          computerLink: () => this.page.locator(this.webSelectors.computerLink),
          desktopLink: () => this.page.locator(this.webSelectors.desktopLink),
          laptopLink: () => this.page.locator(this.webSelectors.laptopLink),
          addToCartBtn: () => this.page.locator(this.webSelectors.addToCartBtn),
          win10RadioBtn: () => this.page.locator(this.webSelectors.win10RadioBtn),
          window11RadioBtn: () => this.page.locator(this.webSelectors.window11RadioBtn),
          linuxRadioBtn: () => this.page.locator(this.webSelectors.linuxRadioBtn),
          quantityField: () => this.page.locator(this.webSelectors.quantityField),
          addToBasketBtn: () => this.page.locator(this.webSelectors.addToBasketBtn),
          shoppingCart: () => this.page.locator(this.webSelectors.shoppingCart),
          termsOfService: () => this.page.locator(this.webSelectors.termsOfService),
          checkOutBtn: () => this.page.locator(this.webSelectors.checkOutBtn),
      };
  }
}
