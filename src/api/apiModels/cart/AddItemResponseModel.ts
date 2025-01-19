import { Expose } from 'class-transformer';
import BaseModel from '../../apiFixtures/BaseModel';

export default class AddItemResponseModel extends BaseModel {
  @Expose({ name: 'cart_item_id' })
  private readonly cartItemId: string;
  @Expose({ name: 'cart_id' })
  private readonly cartId: string;
  @Expose({ name: 'product_id' })
  private readonly productId: string;
  private readonly quantity: number;
  private readonly price: number;

  constructor(cartItemId: string, cartId: string, productId: string, quantity: number, price: number) {
    super();
    this.cartItemId = cartItemId;
    this.cartId = cartId;
    this.productId = productId;
    this.quantity = quantity;
    this.price = price;
  }
}
