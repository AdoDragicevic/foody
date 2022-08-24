import { RestaurantMenuProps } from "../../../models/props";
import RestaurantMenuCategory from "./RestaurantMenuCategory";


const RestaurantMenu = ({ menu }: RestaurantMenuProps) => (
  <article className="restaurant-menu"> 
    {menu.map( category => (
      <RestaurantMenuCategory key={category.category} {...category} />
    ))}
  </article>
);

export default RestaurantMenu;