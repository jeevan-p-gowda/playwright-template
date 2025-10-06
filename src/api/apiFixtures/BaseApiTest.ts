import { test as baseTest } from '@playwright/test';
import AuthClient from '@apiClients/AuthClient';

type fixtures = {
  testHook: void;
};

export const test = baseTest.extend<fixtures>({
  testHook: [
    async ({ request }, use) => {
      console.log('Setting up API request context');
      const authClient = new AuthClient(request);
      await authClient.setApiIRequestContext();

      await use();

      // await requestContext.dispose();
    },
    { auto: true },
  ],
});
