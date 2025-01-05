import { test as baseTest } from '@playwright/test';

type fixtures = {
  testHook: void;
};

export const test = baseTest.extend<fixtures>({
  testHook: [
    async ({ page }, use) => {
      // page.on('console', msg => {
      //     if (msg.type() === 'error') {
      //         console.error('Error:', msg.text());
      //         throw new Error(msg.text());
      //     }
      // });
      console.log('Navigating to base URL');
      await page.goto('/');

      await use();
    },
    { auto: true },
  ],
});
