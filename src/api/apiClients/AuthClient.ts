import { APIRequestContext, request } from '@playwright/test';
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

  async signUp(email: string, password: string): Promise<any> {
    const signUpEndpoint = this.endpoints.auth.signUp;
    const signUpAPI = await this.stringBuilder.apiBuilder(BaseClient.apiURL, signUpEndpoint);
    return await this.request.post(signUpAPI, {
      data: { email: email, password: password },
    });
  }

  async logIn(email: string, password: string): Promise<string> {
    const loginEndpoint = this.endpoints.auth.login;
    const loginAPI = await this.stringBuilder.apiBuilder(BaseClient.apiURL, loginEndpoint);
    const response = await this.request.post(loginAPI, {
      data: { email: email, password: password },
    });
    const responseJSON = await response.json();
    return responseJSON.data.session.access_token;
  }

  async setApiIRequestContext(): Promise<void> {
    const creds = await this.stringBuilder.getRandomCreds();
    const response = await this.signUp(creds.email, creds.password);
    const accessToken = await this.logIn(creds.email, creds.password);
    const requestContext = await request.newContext({ extraHTTPHeaders: { 'Content-Type': 'application/json', Authorization: `Bearer ${accessToken}` } });
    BaseClient.requestContext = requestContext;
    return response.json();
  }
}
