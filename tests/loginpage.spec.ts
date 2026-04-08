import { test, expect } from '../fixtures/baseTest';

test('Login success', async ({ loggedInPage }) => {
  await expect(loggedInPage).toHaveURL(/dashboard/);
});

test('Login failure with wrong credentials', async ({ page }) => {
  // Direct page test without fixture
  const loginPage = new (await import('../pages/LoginPage')).LoginPage(page);
  await loginPage.goto();
  await loginPage.login('wrong', 'wrong');
  const error = page.locator('#spanMessage');
  await expect(error).toHaveText('Invalid credentials');
});