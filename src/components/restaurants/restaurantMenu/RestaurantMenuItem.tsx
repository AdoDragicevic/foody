import { MenuItem } from "../../../models/restaurant";


const RestaurantMenuItem = ({ name, price, description }: MenuItem) => {
  return (
    <article className="restaurant-menu-item">
      <h5 className="restaurant-menu-item__name">{name}</h5>
      <p className="restaurant-menu-item__description">{description}</p>
      <p className="restaurant-menu-item__price"> &euro; {price.toFixed(2)} </p>
      <button className="restaurant-menu-item__btn btn">
        <span> + </span>
      </button>
    </article>
  )
};

export default RestaurantMenuItem;