import { RestaruantMenuItemOptionsProps } from "../../../../models/props";
import RestaurantMenuFormOptions from "./RestaurantMenuFormOptions";
import RestaurantMenuFormBtns from "./RestaurantMenuFormBtns";
import RestaurantMenuFormExtras from "./RestaurantMenuFormExtras";
import useAddItemToCart from "../../../../hooks/useAddItemToCart.ts/useAddItemToCart";


const RestaurantMenuForm = ({ item, extras }: RestaruantMenuItemOptionsProps) => {

  const { 
    data,
    handleDecrement, 
    handleIncrement, 
    handleOptionChange, 
    handleExtrasChange,
    handleSubmit
  } = useAddItemToCart(item);
  
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
    </form>
  )
};

export default RestaurantMenuForm;