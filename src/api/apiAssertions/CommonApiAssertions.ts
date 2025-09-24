import { APIResponse, Expect, expect } from '@playwright/test';

export default class CommonApiAssertions {
  private readonly expect: Expect;

  constructor() {
    this.expect = expect;
  }

  async assertResponseStatusOk(response: APIResponse) {
    await this.expect(response).toBeOK();
  }
}
