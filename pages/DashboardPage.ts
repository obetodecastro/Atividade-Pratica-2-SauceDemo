import { Page, Locator } from '@playwright/test';

export class DashboardPage {
  private tituloProdutos: Locator;
  private listaProdutos: Locator;
  private botaoMenu: Locator;
  private linkLogout: Locator;

  constructor(private page: Page) {
    this.tituloProdutos = page.getByText('Products', { exact: true });
    this.listaProdutos = page.getByTestId('inventory-list');
    this.botaoMenu = page.getByRole('button', { name: 'Open Menu' });
    this.linkLogout = page.getByTestId('logout-sidebar-link');
  }
  async logout(): Promise<void> {
    await this.botaoMenu.click();
    await this.linkLogout.click();
  }
  getTituloProdutos(): Locator {
    return this.tituloProdutos;
  }

  getListaProdutos(): Locator {
    return this.listaProdutos;
  }
}