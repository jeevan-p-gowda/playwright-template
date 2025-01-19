import { Expose } from 'class-transformer';
import BaseModel from '../../apiFixtures/BaseModel';

export default class MakePaymentResponseModel extends BaseModel {
  private readonly message: string;
  @Expose({ name: 'amount_paid' })
  private readonly amountPaid: string;

  constructor(message: string, amountPaid: string) {
    super();
    this.message = message;
    this.amountPaid = amountPaid;
  }
}
