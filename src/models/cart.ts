export interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  extras: string[];
  options: string[];
}

export interface CartItems {
  [id: string]: CartItem;
}

export class Cart {
  constructor( public restaurantId: string, public items: CartItems ) {}
}

export type CartAction = CartActionAddItem | CartActionRemoveItem | CartActionRemoveAll;

interface CartActionAddItem {
  type: "add_item", 
  restaurantId: string, 
  item: CartItem
} 

interface CartActionRemoveItem {
  type: "remove_item", 
  itemId: string
}

interface CartActionRemoveAll {
  type: "remove_all"
}