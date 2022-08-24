import { FormEvent } from "react";
import { useParams } from "react-router-dom";
import { MenuItem } from "../../models/restaurant";
import useItemQuantity from "./useItemQuantity";
import useItemOptions from "./useItemOptions";
import useItemExtras from "./useItemExtras";


const useAddItemToCart = (item: MenuItem) => {

  const { id: restaurantId } = useParams();
  const [quantity, handleDecrement, handleIncrement] = useItemQuantity();
  const [selectedOption, handleOptionChange] = useItemOptions(item);
  const [selectedExtras, handleExtrasChange] = useItemExtras();

  const costOfExtras = selectedExtras.reduce( (acc, curr) => acc + curr.price, 0);
  const price = ( (item.price + costOfExtras) * quantity).toFixed(2);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log({
      restaurantId,
      item,
      quantity,
      selectedOption,
      selectedExtras,
      price
    });
  };

  return {
    data: { quantity, selectedOption, selectedExtras, price },
    handleDecrement,
    handleIncrement,
    handleOptionChange,
    handleExtrasChange,
    handleSubmit
  }
};

export default useAddItemToCart;