import { expect, Expect, Locator } from '@playwright/test';

export default class CommonAssertions {
  public readonly expect: Expect;

  constructor() {
    this.expect = expect;
  }

  async assertValueEquals(actualValue: any, expectedValue: any, options?: { soft: boolean }): Promise<void> {
    if (options?.soft) {
      this.expect.soft(actualValue).toBe(expectedValue);
    } else {
      this.expect(actualValue).toBe(expectedValue);
    }
  }

  async assertElementTextEquals(element: Locator, expectedText: string, options?: { soft: boolean }): Promise<void> {
    if (options?.soft) {
      await this.expect.soft(element).toHaveText(expectedText);
    } else {
      await this.expect(element).toHaveText(expectedText);
    }
  }
}
