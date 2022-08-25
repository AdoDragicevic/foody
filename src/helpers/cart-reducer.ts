import { Cart, CartItem } from "../models/cart";


export const addItemToCart = (prevState: Cart, newItem: CartItem, restaurantId: string): Cart => {
  const items = { ...prevState.items };
  const itemWithSameId = items[newItem.id];
  if (itemWithSameId) {
    const quantity = itemWithSameId.quantity + newItem.quantity;
    items[newItem.id] = { ...itemWithSameId, quantity };
  }
  else items[newItem.id] = newItem;
  return new Cart(restaurantId, items);
};

export const removeItemFromCart = (prevState: Cart, itemId: string) => {
  const items = { ...prevState.items };
  delete items[itemId];
  return { ...prevState, items };
};