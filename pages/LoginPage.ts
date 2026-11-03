import { Page, Locator } from '@playwright/test';

export class LoginPage {
  private campoUsuario: Locator;
  private campoSenha: Locator;
  private botaoLogin: Locator;

  constructor(private page: Page) {
    this.campoUsuario = page.getByPlaceholder('Username');
    this.campoSenha = page.getByPlaceholder('Password');
    this.botaoLogin = page.getByRole('button', { name: 'Login' });
  }
  async fazerLogin(usuario: string, senha: string): Promise<void> {
    await this.campoUsuario.fill(usuario);
    await this.campoSenha.fill(senha);
    await this.botaoLogin.click();
}
}