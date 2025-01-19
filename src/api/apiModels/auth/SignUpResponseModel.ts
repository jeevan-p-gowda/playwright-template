import { Expose } from 'class-transformer';
import BaseModel from '../../apiFixtures/BaseModel';

export default class SignUpResponseModel extends BaseModel {
  @Expose({ name: 'access_token' })
  private readonly accessToken: string;

  constructor(accessToken: string) {
    super();
    this.accessToken = accessToken;
  }
}
