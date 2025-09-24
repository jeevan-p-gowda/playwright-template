import { test as BaseTest } from '@apiFixtures/BaseApiTest';
import ProductClient from '@apiClients/ProductClient';
import CommonApiAssertions from '@apiAssertions/CommonApiAssertions';

type fixtures = {
  productClient: ProductClient;
  commonApiAssertions: CommonApiAssertions;
};

const test = BaseTest.extend<fixtures>({
  productClient: async ({}, use) => {
    await use(new ProductClient());
  },
  commonApiAssertions: async ({}, use) => {
    await use(new CommonApiAssertions());
  },
});

test.describe('E-Commerce E2E API tests', () => {
  test('verify API test', async ({ productClient, commonApiAssertions }) => {
    const response = await productClient.getProductList();
    await commonApiAssertions.assertResponseStatusOk(response);
  });
});
