import { APIRequestContext } from '@playwright/test';
import BaseClient from '../apiFixtures/BaseClient';
import { Endpoints } from '../apiModels/Endpoints';
import endpoints from '../apiResources/endpoints.json';

export default class PaymentClient extends BaseClient {
  private readonly endpoints: Endpoints;
  private readonly request: APIRequestContext;

  constructor() {
    super();
    this.endpoints = endpoints;
    this.request = BaseClient.requestContext;
  }

  async makePayment(): Promise<void> {
    const paymentEndpoint = this.endpoints.payment.payment;
    const paymentAPI = await this.stringBuilder.APIBuilder(BaseClient.apiURL, paymentEndpoint);
    await this.request.post(paymentAPI, {});
  }
}
