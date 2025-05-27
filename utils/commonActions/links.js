export async function clickLinkText(page, text) {
  await page.click(`a:has-text("${text}")`);
}

  