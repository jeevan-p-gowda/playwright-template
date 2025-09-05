import { test as BaseTest } from '@apiFixtures/BaseApiTest';
import ProductClient from '@apiClients/ProductClient';

type fixtures = {
  productClient: ProductClient;
};

const test = BaseTest.extend<fixtures>({
  productClient: async ({}, use) => {
    await use(new ProductClient());
  },
});

test.describe('E-Commerce E2E API tests', () => {
  test('verify API test', async ({ productClient }) => {
    const response = await productClient.getProductList();
    console.log('Response:', response);
  });
});
