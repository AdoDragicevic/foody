import { RestaurantMenuCategoryProps } from "../../../models/props";
import RestaurantMenuItem from "./RestaurantMenuItem";


const RestaurantMenuCategory = ({ category, items, extras }: RestaurantMenuCategoryProps) => {
  
  const menuItems = items.map(item => (
    <li className="restaurant-menu__list-item" key={item.id}>
      <RestaurantMenuItem  item={item} extras={extras} /> 
    </li>
  ));
  
  return (
    <section id="name" className="restaurant-menu__category">
      <h3 className="h-thin"> {category} </h3>
      <hr className="horizontal-rule" />
      <ul className="restaurant-menu__list">
        {menuItems}
      </ul>
    </section>
  );
};

export default RestaurantMenuCategory;