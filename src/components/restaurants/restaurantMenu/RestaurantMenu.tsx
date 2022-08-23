import { RestaurantMenuProps } from "../../../models/props";
import RestaurantMenuCategory from "./RestaurantMenuCategory";


const RestaurantMenu = ({ menu }: RestaurantMenuProps) => {

  const menuCategories = menu.map( ({ category, items }) => (
    <RestaurantMenuCategory name={category} items={items} />
  ));

  return (
    <article className="restaurant-menu"> 
      {menuCategories}
    </article>
  );
};

export default RestaurantMenu;