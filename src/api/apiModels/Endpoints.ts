export interface Endpoints {
  auth: Auth;
  product: Product;
  cart: Cart;
  payment: Payment;
}

export interface Auth {
  signUp: string;
  login: string;
}

export interface Product {
  products: string;
}

export interface Cart {
  cart: string;
  items: string;
}

export interface Payment {
  payment: string;
}
