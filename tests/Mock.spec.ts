import { test as BaseTest } from '../src/fixtures/BaseTest';
import CommonPage from '../src/pages/CommonPage';
import ProductPage from '../src/pages/ProductsPage';
import ProductsAssertions from '../src/assertions/ProductsAssertions';

type fixtures = {
    commonPage: CommonPage;
    productPage: ProductPage;
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

    productsAssertions: async ({ }, use) => {
        await use(new ProductsAssertions());
    },
});

test('Verify product list with server side mock data', async ({ page, productPage, productsAssertions }) => {
    console.log('Mocking the api call before navigating');
    await page.route('https://int.ecommerce.com/api/products*', async (route) => {
        await route.fulfill({ path: 'src/api/apiResources/ProductsResponse.json' });
    });

    console.log('Asserting the product list count as per the mock data');
    const productListCount = await productPage.getProductListCount();
    await productsAssertions.assertValueEquals(productListCount, 2, {
        soft: true,
    });
});

test('Verify product list with client side mock data', async ({ page, productPage, productsAssertions }) => {
    console.log('Mocking the api call before navigating');
    await page.route('https://int.ecommerce.com/api/products/u12bu64/1', async (route) => {
        await route.continue({ url: 'https://int.ecommerce.com/api/products/u12bu63/1' });
    });

    const status = await productPage.getStatus();
    await productsAssertions.assertStatus(status, {
        soft: true,
    });
});
