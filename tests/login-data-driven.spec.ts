import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { listaUsuarios } from '../data/usuarios.data';

for (const cenario of listaUsuarios) {
  test(cenario.descricao, async ({ page }) => {
    const loginPage = new LoginPage(page);

    await page.goto('/');
    await loginPage.fazerLogin(cenario.usuario, cenario.senha);

    if (cenario.sucesso) {
      await expect(page).toHaveURL(/inventory/);
      await expect(page.getByText(cenario.mensagemEsperada, { exact: true })).toBeVisible();
    } else {
      await expect(page.getByTestId('error')).toContainText(cenario.mensagemEsperada);
    }
  });
}