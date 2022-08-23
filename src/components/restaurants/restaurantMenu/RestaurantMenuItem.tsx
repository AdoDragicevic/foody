import { MenuItem } from "../../../models/restaurant";
import Card from "../../UI/Card";


const RestaurantMenuItem = ({ name, price, description, id }: MenuItem) => {
  return (
    
      <article className="restaurant-menu-item">
        <h5 className="restaurant-menu-item__name">{name}</h5>
        <p className="restaurant-menu-item__description">{description}</p>
        <p className="restaurant-menu-item__price">{price.toFixed(2)} EUR</p>
        <button className="restaurant-menu-item__btn btn">
          <span>
            +
          </span>
        </button>
      </article>
      
    
  )
};

export default RestaurantMenuItem;