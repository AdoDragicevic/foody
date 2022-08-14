import { BsFilterLeft } from "react-icons/bs";
import { RestaurantFiltersHeaderProps } from "../../../models/props";


const RestaurantFiltersHeader = ({ text }: RestaurantFiltersHeaderProps) => (
  <header className="restaurant-filters__header">
    <BsFilterLeft />
    <h4 className="restaurant-filters__title">Filters</h4>
  </header>
);

export default RestaurantFiltersHeader;