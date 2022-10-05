import { CartItems } from "./cart";
import { dateFormater } from "../helpers/util";


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
    postalCode: string;
    floor: string;
    comments: string;
  }
}

export class Order {

  public date = dateFormater(new Date(), "-");

  constructor(
    public restaurant: { id: string, name: string },
    public items: CartItems
  ) {};
}