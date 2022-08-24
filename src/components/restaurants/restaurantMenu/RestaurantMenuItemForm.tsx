import { RestaruantMenuItemOptionsProps } from "../../../models/props";

const RestaurantMenuItemForm = ({ item }: RestaruantMenuItemOptionsProps) => {
  
  return (
    <form className="restaurant-menu-item-form">
      
      <h2 className="restaurant-menu-item-form__title"> 
        {item.name} 
      </h2>
      
      <p className="restaurant-menu-item-form__description"> 
        {item.description} 
      </p>
      
      <hr className="horizontal-rule" />
      
      <fieldset className="restaurant-menu-item-form__options">
        <legend> Options </legend>
      </fieldset>
      
      <hr className="horizontal-rule" />
      
      <fieldset className="restaurant-menu-item-form__extra">
        <legend> Extra </legend>
      </fieldset>
      
      <div className="restaurant-menu-item-form__btns">
        <button 
          className="restaurant-menu-item-form__btn-increment btn" 
          type="button"
        > 
          - 
        </button>
        <button 
          className="btn btn-main" 
          type="submit"
        >
          Add num for price
        </button>
        <button 
          className="restaurant-menu-item-form__btn-increment btn" 
          type="button"
        > 
          + 
        </button>
      </div>

    </form>
  )
};

export default RestaurantMenuItemForm;