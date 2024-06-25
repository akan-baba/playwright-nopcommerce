export class ProductAttributesPage {
    constructor(page) {
        this.page = page;
    }

    // Method to select an option for a specific attribute
    async selectAttribute(attributeNumber, optionValue) {
        const selector = `#product_attribute_${attributeNumber}`;
        await this.page.locator(selector).selectOption(optionValue.toString());
    }

    // Example method to select multiple attributes (optional)
    async selectMultipleAttributes(attributeOptions) {
        for (const attributeNumber in attributeOptions) {
            if (attributeOptions.hasOwnProperty(attributeNumber)) {
                const optionValue = attributeOptions[attributeNumber];
                await this.selectAttribute(attributeNumber, optionValue);
            }
        }
    }
}
