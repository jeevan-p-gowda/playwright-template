import { expect, Expect } from '@playwright/test';

export default class CommonAssertions {
  public readonly expect: Expect;

  constructor() {
    this.expect = expect;
  }

  async assertValueEquals(actualValue: string, expectedValue: string, options?: { soft: boolean }): Promise<void> {
    if (options?.soft) {
      this.expect.soft(actualValue).toBe(expectedValue);
    } else {
      this.expect(actualValue).toBe(expectedValue);
    }
  }
}
