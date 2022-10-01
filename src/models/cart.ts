import { ExtraOrder, MenuItem } from "./restaurant";
import { getCartItemId, getCartItemTotalPrice } from "../helpers/cart";

export class CartItem {

  public id: string;
  public totalPrice: number;

  constructor(
    public menuItem: MenuItem, 
    public selectedExtras: ExtraOrder[], 
    public selectedOption: string, 
    public quantity: number
    ) {
      this.id = getCartItemId(menuItem.id, selectedExtras, selectedOption);
      this.totalPrice = getCartItemTotalPrice(menuItem, selectedExtras, quantity);
    }
}

export interface CartItems {
  [id: string]: CartItem;
}

export class Cart {
  constructor( public restaurantId: string, public items: CartItems ) {}
}

export type CartAction = CartActionAddItem | CartActionRemoveItem | CartActionRemoveAll;

interface CartActionAddItem {
  type: "add_item";
  cartItem: CartItem;
  restaurantId: string;
} 

export interface CartActionRemoveItem {
  type: "remove_item", 
  itemId: string
}

interface CartActionRemoveAll {
  type: "remove_all"
}