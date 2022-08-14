import RestaurantFiltersHeader from "./RestaurantFiltersHeader";
import ToggleBtn from "../../UI/ToggleBtn";

import { BsFilterLeft } from "react-icons/bs";


const RestaurantFiltersMain = () => (
  <>
    <RestaurantFiltersHeader text="Filters" />
    <ul className="restaurant-filters__list">
    <li className="restaurant-filters__list-item">
        <ToggleBtn text="Special Offers" icon={<BsFilterLeft />} onClick={()=> console.log("btn click")} />
      </li>
      <li className="restaurant-filters__list-item">
        <ToggleBtn text="Top Rated" icon={<BsFilterLeft />} onClick={()=> console.log("btn click")} />
      </li>
      <li className="restaurant-filters__list-item">
        <ToggleBtn text="Fast Delivery" icon={<BsFilterLeft />} onClick={()=> console.log("btn click")} />
      </li>
      <li className="restaurant-filters__list-item">
        <ToggleBtn text="Low Price" icon={<BsFilterLeft />} onClick={()=> console.log("btn click")} />
      </li>
      <li className="restaurant-filters__list-item">
        <ToggleBtn text="Opened Now" icon={<BsFilterLeft />} onClick={()=> console.log("btn click")} />
      </li>
    </ul>
  </>
);

export default RestaurantFiltersMain;