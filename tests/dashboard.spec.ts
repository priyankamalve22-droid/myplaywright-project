import { test, expect } from '../fixtures/baseTest';
import { DashboardPage } from '../pages/Dashboardpage';

test('Dashboard welcome visible', async ({ loggedInPage }) => {
  const dashboard = new DashboardPage(loggedInPage);
  await expect(dashboard.welcomeMessage).toBeVisible();
});

test('Open My Info page', async ({ loggedInPage }) => {
  const dashboard = new DashboardPage(loggedInPage);
  await dashboard.openMyInfo();
  await expect(loggedInPage).toHaveURL(/viewMyDetails/);
});