// utils/validationUtils.js
import { expect } from '@playwright/test';
export async function assertAnyValidationMessage(page, expectedText, allowNone = false) {
    const fieldValidation = page.locator('.field-validation-error');
    const summaryValidation = page.locator('.validation-summary-errors');
  
    const fieldCount = await fieldValidation.count();
    const summaryCount = await summaryValidation.count();
  
    if (fieldCount > 0) {
      await expect(fieldValidation.first()).toContainText(expectedText);
    } else if (summaryCount > 0) {
      await expect(summaryValidation.first()).toContainText(expectedText);
    } else if (!allowNone) {
      throw new Error("No validation message found on the page.");
    }
  }
  
  