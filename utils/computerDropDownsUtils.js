// utils.js
export async function selectProductAttribute(page, attributeNumber, value) {
    const dropdown = page.locator(`select[name='product_attribute_${attributeNumber}']`);
    await dropdown.selectOption({ label: value });
  }