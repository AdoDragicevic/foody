import { MenuItem } from "./restaurant";


export interface User {
  name: string;
  contact: UserContact;
  orders: Order[];
}

export interface UserContact {
  email: string;
  phone: string;
  address: {
    street: string;
    streetNumber: string;
    postalCode: number;
    floor: number;
    comments?: string;
  }
}

export interface Order {
  restaurantId: string;
  restaurantName: string;
  date: Date;
  items: MenuItem[];
  isCompleted: true;
}