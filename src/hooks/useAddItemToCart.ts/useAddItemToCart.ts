import { useContext } from "react";
import { useParams } from "react-router-dom";
import { MenuItem } from "../../models/restaurant";
import useItemQuantity from "./useItemQuantity";
import useItemOptions from "./useItemOptions";
import useItemExtras from "./useItemExtras";
import { CartCtx, CartDispatchCtx } from "../../contexts/cart-context";
import { CartItem } from "../../models/cart";


const useAddItemToCart = (menuItem: MenuItem) => {

  const { id: restaurantId } = useParams();
  const cart = useContext(CartCtx);
  const cartDispatch = useContext(CartDispatchCtx);

  const [quantity, handleDecrement, handleIncrement] = useItemQuantity();
  const [selectedOption, handleOptionChange] = useItemOptions(menuItem);
  const [selectedExtras, handleExtrasChange] = useItemExtras();
  
  const isDifferentRestaurant = cart.restaurantId && cart.restaurantId !== restaurantId;
  const costOfExtras = selectedExtras.reduce( (acc, curr) => acc + curr.price, 0);
  const price = ( (menuItem.price + costOfExtras) * quantity).toFixed(2);

  const addItem = () => {
    if (!restaurantId) throw new Error("missing: restaurant id from URL");
    const cartItem = new CartItem(menuItem, selectedExtras, selectedOption, quantity);
    cartDispatch({ type: "add_item", cartItem, restaurantId });
  }

  return {
    data: { quantity, selectedOption, selectedExtras, price },
    isDifferentRestaurant,
    addItem,
    handleDecrement,
    handleIncrement,
    handleOptionChange,
    handleExtrasChange
  }
};

export default useAddItemToCart;