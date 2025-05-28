import { APIRequestContext } from '@playwright/test';
import BaseClient from '../apiFixtures/BaseClient';
import endpoints from '../apiResources/endpoints.json';
import { Endpoints } from '../apiModels/Endpoints';

export default class CartClient extends BaseClient {
  private readonly endpoints: Endpoints;
  private readonly request: APIRequestContext;

  constructor() {
    super();
    this.endpoints = endpoints;
    this.request = BaseClient.requestContext;
  }

  async createCart(): Promise<void> {
    const cartEndpoint = this.endpoints.cart.cart;
    const cartAPI = await this.stringBuilder.apiBuilder(BaseClient.apiURL, cartEndpoint);
    await this.request.post(cartAPI, {});
  }

  async addItemToCart(): Promise<void> {
    const itemsEndpoint = this.endpoints.cart.items;
    const itemsAPI = await this.stringBuilder.apiBuilder(BaseClient.apiURL, itemsEndpoint);
    await this.request.post(itemsAPI, {});
  }
}
