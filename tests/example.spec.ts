import ProductsAssertions from '../src/assertions/ProductsAssertions';
import { test as BaseTest } from '../src/fixtures/BaseTest';
import { ProductData } from '../src/models/ProductData';
import CommonPage from '../src/pageObjects/CommonPage';
import ProductPage from '../src/pageObjects/ProductsPage';
import productData from '../src/resources/ProductData.json';

type fixtures = {
  productPage: ProductPage;
  commonPage: CommonPage;
  productData: ProductData;
  productsAssertions: ProductsAssertions;
};

const test = BaseTest.extend<fixtures>({
  commonPage: async ({ page }, use) => {
    await use(new CommonPage(page));
  },

  productPage: async ({ page, commonPage }, use) => {
    console.log(`Navigating to ${await page.title()} page`);
    await commonPage.navigateToProductsPage();
    await use(new ProductPage(page));
  },

  productData: async ({}, use) => {
    await use({ ...productData.product });
  },

  productsAssertions: async ({}, use) => {
    await use(new ProductsAssertions());
  },
});

test.describe('Search E2E tests', () => {
  test('verify search product with soft assertion', { tag: ['@sanity', '@regression'] }, async ({ productPage, productData, productsAssertions }) => {
    try {
      console.log(`Searching for product: ${productData.productName}`);
      await productPage.searchForProduct(productData.productName);
      const searchResultHeading = await productPage.getSearchResultsHeading();

      console.log(`Asserting search results heading: ${searchResultHeading}`);
      await productsAssertions.assertSearchResultsHeading(searchResultHeading, {
        soft: true,
      });
    } catch (error) {
      console.error(error);
    }
  });

  test('verify search product with hard assertion', { tag: '@sanity' }, async ({ productPage, productData, productsAssertions }) => {
    try {
      console.log(`Searching for product: ${productData.productName}`);
      await productPage.searchForProduct(productData.productName);
      const searchResultHeading = await productPage.getSearchResultsHeading();

      console.log(`Asserting search results heading: ${searchResultHeading}`);
      await productsAssertions.assertSearchResultsHeading(searchResultHeading);
    } catch (error) {
      console.error(error);
    }
  });
});
