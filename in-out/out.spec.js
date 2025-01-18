import { test, expect } from '@playwright/test';

test('Clock out', async ({ page }) => {
  await page.goto('https://portal.empowerteams.io/login');
  
  await new Promise(resolve => setTimeout(resolve, 5000))
  await page.getByTestId('login-button').getByTestId('button').click();
  await new Promise(resolve => setTimeout(resolve, 5000))

  await page.keyboard.press('Tab');
  await page.keyboard.type(process.env.username)
  await page.keyboard.press("Enter")
  await new Promise(resolve => setTimeout(resolve, 5000))

  await page.keyboard.press('Tab'); // username
  await new Promise(resolve => setTimeout(resolve, 1000))
  await page.keyboard.type(process.env.password)
  await page.keyboard.press("Enter")

  await new Promise(resolve => setTimeout(resolve, 10000))
  await page.waitForURL('https://portal.empowerteams.io/', {timeout: 10000});
  // could be 1 or more buttons
  await expect((await page.getByRole("button", {name: "Clock Out"}).all()).length).toBeGreaterThanOrEqual(1)
  // click the first clock in button found
//   await page.getByRole("button", {name: "Clock Out"}).all()[0].click();
});