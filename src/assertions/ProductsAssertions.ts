import CommonAssertions from "./CommonAssertions";

export default class ProductsAssertions extends CommonAssertions {
    async assertSearchResultsHeading(heading: string): Promise<void> {
        await this.assertValueEquals(heading, 'Search Results', true);
    }
}
