import { expect, Expect } from "@playwright/test";

export default class CommonAssertions {

    private readonly expect: Expect;

    constructor() {
        this.expect = expect
    }

    async assertValueEquals(actualValue: string, expectedValue: string, soft: boolean = false): Promise<void> {
        if (soft) {
            this.expect.soft(actualValue).toBe(expectedValue);
        } else {
            this.expect(actualValue).toBe(expectedValue);
        }
    }
}
