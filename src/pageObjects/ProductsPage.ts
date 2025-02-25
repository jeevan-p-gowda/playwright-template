import { Locator, Page } from '@playwright/test';
import BasePage from '../fixtures/BasePage';
import { step } from '../utils/WinstonLoggerConfig';

export default class ProductsPage extends BasePage {
  private readonly searchIcon: Locator;
  private readonly searchField: Locator;
  private readonly searchResultsHeading: Locator;

  constructor(page: Page) {
    super(page);
    this.searchIcon = page.getByRole('button', { name: 'Search' });
    this.searchField = page.getByPlaceholder('Search');
    this.searchResultsHeading = page.getByRole('heading', {
      name: 'Search results',
    });
  }

  @step()
  async searchForProduct(product: string): Promise<void> {
    await this.searchIcon.click();
    await this.searchField.fill(product);
    await this.searchField.press('Enter');
  }

  @step()
  async getSearchResultsHeading(): Promise<string> {
    return await this.searchResultsHeading.innerText();
  }
}
