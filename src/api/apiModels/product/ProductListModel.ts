import { Expose, Type } from 'class-transformer';
import BaseModel from '../../apiFixtures/BaseModel';

export default class ProductListModel extends BaseModel {
  @Type(() => ProductListModel)
  private readonly products: ProductModel[];

  constructor(statusCode: number, products: ProductModel[]) {
    super();
    this.products = products;
  }
}

export class ProductModel {
  @Expose({ name: 'created_at' })
  private readonly createdAt: string;
  private readonly name: string;
  private readonly description: string;
  private readonly price: number;
  private readonly quantity: number;
  private readonly id: string;
  @Expose({ name: 'category_id' })
  private readonly categoryId: string;

  constructor(createdAt: string, name: string, description: string, price: number, quantity: number, id: string, categoryId: string) {
    this.createdAt = createdAt;
    this.name = name;
    this.description = description;
    this.price = price;
    this.quantity = quantity;
    this.id = id;
    this.categoryId = categoryId;
  }
}
