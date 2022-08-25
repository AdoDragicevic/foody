import { ExtraOrder } from "../models/restaurant";


export const getCartItemId = (menuItemId: string, selectedExtras: ExtraOrder[], selectedOption: string): string => {
  const extrasId = selectedExtras.map(extraOrder => extraOrder.id)
                   .sort((a, b) => a.localeCompare(b))
                   .join("");
  return `${menuItemId}-o-${selectedOption}-e-${extrasId}`;
};