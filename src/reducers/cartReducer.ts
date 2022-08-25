import { Cart, CartAction } from "../models/cart";
import { addItemToCart, removeItemFromCart } from "../helpers/cart-reducer";


const cartReducer = (state: Cart, action: CartAction) => {
  switch (action.type) {
    case "add_item": 
      return addItemToCart(state, action.item, action.restaurantId);
    case "remove_item":
      return removeItemFromCart(state, action.itemId);
    case "remove_all":
      return new Cart("", {});
    default:
      return state;
  }
};

export default cartReducer;