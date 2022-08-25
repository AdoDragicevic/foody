import { Cart, CartItem } from "../models/cart";


export const addItemToCart = (prevState: Cart, newItem: CartItem, restaurantId: string): Cart => {
  const items = { ...prevState.items };
  const identicalItem = items[newItem.id];
  if (identicalItem) {
    const quantity = identicalItem.quantity + newItem.quantity;
    items[newItem.id] = { ...newItem, quantity };
  }
  else {
    items[newItem.id] = newItem;
  }
  return new Cart(restaurantId, items);
}

export const removeItemFromCart = (prevState: Cart, itemId: string) => {
  const items = { ...prevState.items };
  delete items[itemId];
  const isCartEmpty = Object.keys(items).length === 0;
  return isCartEmpty ? new Cart( "", {} ) : { ...prevState, items };
};