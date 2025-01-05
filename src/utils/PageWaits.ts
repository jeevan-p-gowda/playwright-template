import { Page } from '@playwright/test';

export default class PageWaits {
  private readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }
}
