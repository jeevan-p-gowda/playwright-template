import { step } from '../utils/WinstonLoggerConfig';
import CommonAssertions from './CommonAssertions';

export default class ProductsAssertions extends CommonAssertions {
  @step()
  async assertSearchResultsHeading(heading: string, options?: { soft: boolean }): Promise<void> {
    if (options?.soft) {
      await this.assertValueEquals(heading, 'Search Results', {
        soft: options.soft,
      });
    } else {
      await this.assertValueEquals(heading, 'Search Results');
    }
  }
}
