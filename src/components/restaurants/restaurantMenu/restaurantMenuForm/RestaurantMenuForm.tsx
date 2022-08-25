import { FormEvent } from "react";
import { RestaurantMenuFormProps } from "../../../../models/props";
import RestaurantMenuFormOptions from "./RestaurantMenuFormOptions";
import RestaurantMenuFormBtns from "./RestaurantMenuFormBtns";
import RestaurantMenuFormExtras from "./RestaurantMenuFormExtras";
import useAddItemToCart from "../../../../hooks/useAddItemToCart.ts/useAddItemToCart";


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
        <p>Cart includes items from a different restaurant. They will be deleted if this item is added.</p>
      )}
      
    </form>
  )
};

export default RestaurantMenuForm;