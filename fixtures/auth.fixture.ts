import { test as base } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { DashboardPage } from '../pages/DashboardPage';

type MinhasFixtures = {
  dashboardPage: DashboardPage;
};

export const test = base.extend<MinhasFixtures>({
  dashboardPage: async ({ page }, use) => {
    const loginPage = new LoginPage(page);

    await page.goto('/');
    await loginPage.fazerLogin('standard_user', 'secret_sauce');

    await page.waitForURL('**/inventory.html');

    const dashboardPage = new DashboardPage(page);

    await use(dashboardPage);
  },
});