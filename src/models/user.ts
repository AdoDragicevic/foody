import { CartItems } from "./cart";


export interface User {
  id: string;
  name: string;
  contact: UserContact;
  orders: Orders | null;
}

export interface Orders {
  [orderId: string]: Order;
}

export interface UserContact {
  email: string;
  phone: string;
  address: {
    street: string;
    streetNumber: string;
    postalCode: number;
    floor: number;
    comments: string;
  }
}

export class Order {

  public date = new Date();

  constructor(
    public restaurantId: string, 
    public items: CartItems
  ) {};
}