import CommonAssertions from './CommonAssertions';

export default class ProductsAssertions extends CommonAssertions {
  async assertSearchResultsHeading(heading: string, options?: { soft: boolean }): Promise<void> {
    if (options) {
      await this.assertValueEquals(heading, 'Search Results', {
        soft: options.soft,
      });
    } else {
      await this.assertValueEquals(heading, 'Search Results');
    }
  }
}
