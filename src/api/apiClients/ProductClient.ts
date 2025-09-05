import { APIRequestContext } from '@playwright/test';
import BaseClient from '../apiFixtures/BaseClient';
import { Endpoints } from '../apiModels/Endpoints';
import endpoints from '../apiResources/endpoints.json';

export default class ProductClient extends BaseClient {
  private readonly endpoints: Endpoints;
  private readonly request: APIRequestContext;

  constructor() {
    super();
    this.endpoints = endpoints;
    this.request = BaseClient.requestContext;
  }

  async getProductList(): Promise<any> {
    const productEndpoint = this.endpoints.product.products;
    const productAPI = await this.stringBuilder.apiBuilder(BaseClient.apiURL, productEndpoint);
    const response = await this.request.get(productAPI);
    return await response.json();
    // const products = await this.serializeDeserialize.deserialize(ProductListModel, await response.json());
  }
}
