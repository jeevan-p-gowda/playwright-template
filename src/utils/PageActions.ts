import { Page } from '@playwright/test';

export default class PageActions {
  private readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }
}
