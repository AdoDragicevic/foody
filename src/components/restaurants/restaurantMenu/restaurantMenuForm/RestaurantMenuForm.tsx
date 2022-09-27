import { FormEvent } from "react";
import { RestaurantMenuFormProps } from "../../../../models/props";
import RestaurantMenuFormOptions from "./RestaurantMenuFormOptions";
import RestaurantMenuFormBtns from "./RestaurantMenuFormBtns";
import RestaurantMenuFormExtras from "./RestaurantMenuFormExtras";
import useAddItemToCart from "../../../../hooks/useAddItemToCart.ts/useAddItemToCart";
import WarningIcon from "../../../UI/WarningIcon";


const RestaurantMenuForm = ({ item, extras, onClose }: RestaurantMenuFormProps) => {

  const { 
    data,
    isDifferentRestaurant,
    addItem,
    handleDecrement, 
    handleIncrement, 
    handleOptionChange, 
    handleExtrasChange,
  } = useAddItemToCart(item);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addItem();
    onClose();
  }
  
  return (
    <form className="restaurant-menu-form" onSubmit={handleSubmit}>
      <h2 className="h-tertiary"> {item.name} </h2>
      <p className="restaurant-menu-form__description"> {item.description} </p>
      
      <div className="restaurant-menu-form__container">
        <RestaurantMenuFormOptions options={item.options || []} onChange={handleOptionChange} />
        <RestaurantMenuFormExtras extras={extras} onChange={handleExtrasChange} />  
      </div>
      
      <RestaurantMenuFormBtns 
        onDecrement={handleDecrement}
        onIncrement={handleIncrement}
        onSubmit={handleSubmit}
        price={data.price}
        quantity={data.quantity} 
      />
      {isDifferentRestaurant && (
        <div className="restaurant-menu-form__warning mt-lg">
          <WarningIcon />
          <p>
            Cart holds items from another restaurant! 
            They will be deleted if this item is added!
          </p>
        </div>
      )}
    </form>
  )
};

export default RestaurantMenuForm;