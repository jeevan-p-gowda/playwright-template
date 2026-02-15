import { Locator, Page } from '@playwright/test';
import BasePage from '../fixtures/BasePage';
import { step } from '../utils/WinstonLoggerConfig';

export default class CommonPage extends BasePage {
  private readonly homeIcon: Locator;
  private readonly accountIcon: Locator;

  constructor(private page: Page) {
    super(page);
    this.page = page;
    this.homeIcon = page.locator("//span[.='Home']");
    this.accountIcon = page.getByRole('link', { name: 'Log in' });
  }

  @step('Navigating to products page')
  async navigateToProductsPage(): Promise<void> {
    await this.homeIcon.click();
  }

  @step()
  async navigateToLoginPage(): Promise<void> {
    await this.accountIcon.click();
  }
}
