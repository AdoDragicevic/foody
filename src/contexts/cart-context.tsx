import { createContext, Dispatch } from "react";
import { ChildrenProp } from "../models/props";
import { Cart, CartAction } from "../models/cart";
import useReducerAndLocStrg from "../hooks/useReducerAndLocStrg";
import cartReducer from "../reducers/cartReducer";


export const CartCtx = createContext<Cart>(new Cart("", {}));

export const CartDispatchCtx = createContext<Dispatch<CartAction>>((a: CartAction) => new Cart("", {}));

export const CartProvider = ({ children }: ChildrenProp) => {

  const [cart, dispatch] = useReducerAndLocStrg(cartReducer, new Cart("", {}), "cart");

  return (
    <CartDispatchCtx.Provider value={dispatch}>
      <CartCtx.Provider value={cart}>
        {children}
      </CartCtx.Provider>
    </CartDispatchCtx.Provider>
  )
};