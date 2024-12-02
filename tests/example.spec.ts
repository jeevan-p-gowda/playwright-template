import ProductsAssertions from '../src/assertions/ProductsAssertions';
import { test as BaseTest } from '../src/fixtures/BaseTest';
import { ProductData } from '../src/models/ProductData';
import ProductPage from '../src/pageObjects/ProductsPage';
import productData from '../src/resources/ProductData.json';

type fixtures = {
  productPage: ProductPage;
  productData: ProductData;
  productsAssertions: ProductsAssertions;
}

const test = BaseTest.extend<fixtures>({
  productPage: async ({ page }, use) => {
    await use(new ProductPage(page));
  },

  productData: async ({ }, use) => {
    await use({ ...productData.product });
  },

  productsAssertions: async ({ }, use) => {
    await use(new ProductsAssertions());
  }
});

test.describe('Search E2E tests', () => {
  test('verify search product', async ({ productPage, productData, productsAssertions }) => {
    await productPage.searchForProduct(productData.productName);
    const searchResultHeading = await productPage.getSearchResultsHeading();
    await productsAssertions.assertSearchResultsHeading(searchResultHeading);
  });
});
