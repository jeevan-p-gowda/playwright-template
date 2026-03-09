import { step } from '../utils/WinstonLoggerConfig';
import CommonAssertions from './CommonAssertions';

export default class ProductsAssertions extends CommonAssertions {
  @step()
  async assertSearchResultsHeading(heading: any, options?: { soft: boolean }): Promise<void> {
    if (options?.soft) {
      await this.assertValueEquals(heading, 'Search Results', {
        soft: options.soft,
      });
    } else {
      await this.assertValueEquals(heading, 'Search Results');
    }
  }

  @step()
  async assertStatus(status: any, options?: { soft: boolean }): Promise<void> {
    if (options?.soft) {
      await this.assertElementTextEquals(status, 'Unauthorized', {
        soft: options.soft,
      });
    } else {
      await this.assertElementTextEquals(status, 'Unauthorized');
    }
  }
}
