import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://rahulshettyacademy.com/client/');
  await page.getByPlaceholder('email@example.com').fill('susmitha.soundararajan@solitontech.com');
  await page.getByPlaceholder('email@example.com').press('Tab');
  await page.getByPlaceholder('enter your passsword').fill('Sush090995!');
  await page.getByPlaceholder('enter your passsword').press('Tab');
  await page.getByRole('button', { name: 'Login' }).press('Enter');
  await page.getByRole('button', { name: 'View' }).nth(1).click();
  await page.getByRole('button', { name: 'Add to Cart' }).click();
  await page.getByRole('button', { name: ' Cart' }).click();
  //await page.locator("/html/body/app-root/app-dashboard/app-sidebar/nav/ul/li[4]/button").click();
  await page.getByRole('button', { name: 'Checkout❯' }).click();
  await page.getByPlaceholder('Select Country').fill('india');
  await page.getByPlaceholder('Select Country').press('ArrowDown');
  await page.getByPlaceholder('Select Country').press('ArrowDown');
  await page.getByPlaceholder('Select Country').press('Enter');
  //await page.waitForTimeout(50000);
  //await page.getByRole('button', { name: 'India' }).click();
  await page.locator('input[type="text"]').nth(1).click();
  await page.locator('input[type="text"]').nth(1).fill('012');
  await page.locator('input[type="text"]').nth(2).click();
  await page.locator('input[type="text"]').nth(2).fill('SGS');
  await page.locator('input[name="coupon"]').click();
  await page.locator('input[name="coupon"]').fill('aaa');
  //await page.getByRole('button', { name: 'Apply Coupon' }).click();
  await page.getByText('Place Order').click();
  //await page.getByText('Orders History Page').click();
  const response = await apiContext.get('https://rahulshettyacademy.com/api/ecom/order/get-orders-details?id=65cf1aaca86f8f74dc7a589d')

  if()
  {

  }
});