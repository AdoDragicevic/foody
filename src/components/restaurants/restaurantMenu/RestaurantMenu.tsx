import { ReactNode } from "react";
import { RestaurantMenuProps } from "../../../models/props";
import RestaurantMenuCategory from "./RestaurantMenuCategory";


const RestaurantMenu = ({ menu }: RestaurantMenuProps) => {

  const menuCategories: ReactNode[] = [];

  for (const category in menu) {
    menuCategories.push(
      <RestaurantMenuCategory name={category} items={menu[category]} />
    );
  }

  return (
    <article className="restaurant-menu"> 
      {menuCategories}
    </article>
  );
};

export default RestaurantMenu;