import { Page, Locator } from '@playwright/test';
import BasePage from '../fixtures/BasePage';

export default class LoginPage extends BasePage {
  private readonly page: Page;
  private readonly emailField: Locator;
  private readonly passwordField: Locator;
  private readonly signInButton: Locator;

  constructor(page: Page) {
    super(page);
    this.page = page;
    this.emailField = page.locator('input#CustomerEmail');
    this.passwordField = page.locator('input#CustomerPassword');
    this.signInButton = page.locator("//button[contains(.,'Sign in')]");
  }

  async login(email: string, password: string): Promise<void> {
    await this.emailField.fill(email);
    await this.passwordField.fill(password);
    await this.signInButton.click();
  }
}
