import { Expose } from 'class-transformer';

export default class AddItemRequestModel {
  @Expose({ name: 'product_id' })
  private readonly productId: string;
  private readonly quantity: number;

  constructor(productId: string, quantity: number) {
    this.productId = productId;
    this.quantity = quantity;
  }
}
