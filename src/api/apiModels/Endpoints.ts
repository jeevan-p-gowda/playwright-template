export interface Endpoints {
  auth: {
    signUp: string;
    login: string;
  };
  product: {
    products: string;
  };
  cart: {
    cart: string;
    items: string;
  };
  payment: {
    payment: string;
  };
}
