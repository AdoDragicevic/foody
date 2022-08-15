import RestaurantFiltersHeader from "./RestaurantFiltersHeader";
import ToggleBtn from "../../UI/ToggleBtn";
import { BsClock } from "react-icons/bs";
import { BsStar } from "react-icons/bs";
import { BsCurrencyDollar } from "react-icons/bs";
import { BsCashCoin } from "react-icons/bs";
import { BsDoorOpen } from "react-icons/bs";


const RestaurantFiltersMain = () => (
  <>
    <RestaurantFiltersHeader text="Filters" />
    <ul className="restaurant-filters__list">
      <li className="restaurant-filters__list-item">
        <ToggleBtn text="Special Offers" icon={<BsCashCoin />} onClick={()=> console.log("btn click")} />
      </li>
      <li className="restaurant-filters__list-item">
        <ToggleBtn text="Top Rated" icon={<BsStar />} onClick={()=> console.log("btn click")} />
      </li>
      <li className="restaurant-filters__list-item">
        <ToggleBtn text="Fast Delivery" icon={<BsClock />} onClick={()=> console.log("btn click")} />
      </li>
      <li className="restaurant-filters__list-item">
        <ToggleBtn text="Low Price" icon={<BsCurrencyDollar />} onClick={()=> console.log("btn click")} />
      </li>
      <li className="restaurant-filters__list-item">
        <ToggleBtn text="Opened Now" icon={<BsDoorOpen />} onClick={()=> console.log("btn click")} />
      </li>
    </ul>
  </>
);

export default RestaurantFiltersMain;