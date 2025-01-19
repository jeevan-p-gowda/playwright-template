import { APIRequestContext } from '@playwright/test';
import BaseClient from '../apiFixtures/BaseClient';
import endpoints from '../apiResources/endpoints.json';
import { Endpoints } from '../apiModels/Endpoints';

export default class AuthClient extends BaseClient {
  private readonly endpoints: Endpoints;
  private readonly request: APIRequestContext;

  constructor(requestContext: APIRequestContext) {
    super();
    this.endpoints = endpoints;
    this.request = requestContext;
  }

  async signUp(email: string, password: string): Promise<void> {
    const signUpEndpoint = this.endpoints.auth.signUp;
    const signUpAPI = await this.stringBuilder.APIBuilder(BaseClient.apiURL, signUpEndpoint);
    await this.request.post(signUpAPI, {});
  }

  async logIn(email: string, password: string): Promise<void> {
    const loginEndpoint = this.endpoints.auth.login;
    const loginAPI = await this.stringBuilder.APIBuilder(BaseClient.apiURL, loginEndpoint);
    await this.request.post(loginAPI, {
      data: { email, password },
    });
  }
}
