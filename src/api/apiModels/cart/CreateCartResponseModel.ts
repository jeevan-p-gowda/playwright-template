import { Expose } from 'class-transformer';
import BaseModel from '../../apiFixtures/BaseModel';

export default class CreateCartResponseModel extends BaseModel {
  @Expose({ name: 'cart_id' })
  private readonly cartId: string;
  @Expose({ name: 'user_id' })
  private readonly userId: string;
  @Expose({ name: 'created_at' })
  private readonly createdAt: string;

  constructor(cartId: string, userId: string, createdAt: string) {
    super();
    this.cartId = cartId;
    this.userId = userId;
    this.createdAt = createdAt;
  }
}
