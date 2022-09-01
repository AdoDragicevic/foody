import { CartItems } from "../models/cart";
import { ExtraOrder } from "../models/restaurant";


export const getCartItemId = (menuItemId: string, selectedExtras: ExtraOrder[], selectedOption: string): string => {
  const extrasId = selectedExtras.map(extraOrder => extraOrder.id)
                   .sort((a, b) => a.localeCompare(b))
                   .join("");
  return `${menuItemId}-o-${selectedOption}-e-${extrasId}`;
};

export const getCartItemsTotalPrice = (items: CartItems) => {
  let totalPrice = 0;
  for (let key in items) {
    const { price } = items[key].menuItem;
    const { quantity } = items[key];
    totalPrice += price * quantity;
  }
  return totalPrice;
}