import { expect } from '@playwright/test';
import { test } from '../fixtures/auth.fixture';

test('deve acessar a área de produtos e encerrar a sessão', async ({ dashboardPage, page }) => {
  await expect(dashboardPage.getTituloProdutos()).toBeVisible();
  await expect(dashboardPage.getListaProdutos()).toBeVisible();

  await dashboardPage.logout();

  await expect(page).toHaveURL('/');
});