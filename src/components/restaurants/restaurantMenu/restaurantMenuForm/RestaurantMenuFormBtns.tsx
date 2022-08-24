import { RestaurantMenuFormBtnsProps } from "../../../../models/props";

const RestaurantMenuFormBtns = ({ onIncrement, onDecrement, quantity, price }: RestaurantMenuFormBtnsProps) => (
  <div className="restaurant-menu-form__btns">
    <button 
      className="restaurant-menu-form__btn-increment btn" 
      type="button"
      title="-1"
      disabled={quantity <= 1}
      onClick={onDecrement}
    > 
      - 
    </button>
    <button className="btn btn-main" type="submit">
      Add {quantity} for &euro; {price}
    </button>
    <button 
      className="restaurant-menu-form__btn-increment btn" 
      type="button"
      title="1"
      onClick={onIncrement}
    > 
      + 
    </button>
  </div>
);

export default RestaurantMenuFormBtns;