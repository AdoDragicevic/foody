import { CartItems } from "../models/cart";
import { ExtraOrder, MenuItem } from "../models/restaurant";


export const getCartItemId = (menuItemId: string, selectedExtras: ExtraOrder[], selectedOption: string): string => {
  const extrasId = selectedExtras.map(extraOrder => extraOrder.id)
                   .sort((a, b) => a.localeCompare(b))
                   .join("");
  return `${menuItemId}-o-${selectedOption}-e-${extrasId}`;
};

export const getCartItemTotalPrice = (item: MenuItem, selectedExtras: ExtraOrder[], quantity: number) => {
  const oneItemPrice = item.price + selectedExtras.reduce((acc, curr) => acc += curr.price, 0);
  const allItemsPrice = oneItemPrice * quantity;
  return allItemsPrice;
}

export const getCartItemsTotalPrice = (items: CartItems) => (
  Object.values(items).reduce((acc, curr) => acc += curr.totalPrice, 0)
);