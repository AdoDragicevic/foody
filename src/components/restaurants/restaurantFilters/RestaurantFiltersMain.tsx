import { BsClock } from "react-icons/bs";
import { BsStar } from "react-icons/bs";
import { BsCurrencyDollar } from "react-icons/bs";
import { BsCashCoin } from "react-icons/bs";
import { BsDoorOpen } from "react-icons/bs";
import ToggleBtn from "../../UI/ToggleBtn";
import RestaurantFiltersHeader from "./RestaurantFiltersHeader";
import useToggleSearchParam from "../../../hooks/useToggleSearchParam";


const RestaurantFiltersMain = () => {
  
  const [filters, toggleFilter] = useToggleSearchParam("filter");  
   
  return <>
    <RestaurantFiltersHeader text="Filters" />
    <ul className="restaurant-filters__list">
      <li className="restaurant-filters__list-item">
        <ToggleBtn 
          text="Special Offers" 
          icon={<BsCashCoin />} 
          onClick={ () => toggleFilter("special") } 
          isActive={filters.has("special")}
        />
      </li>
      <li className="restaurant-filters__list-item">
        <ToggleBtn 
          text="Top Rated" 
          icon={<BsStar />} 
          onClick={ () => toggleFilter("top") }
          isActive={filters.has("top")}
        />
      </li>
      <li className="restaurant-filters__list-item">
        <ToggleBtn 
          text="Fast Delivery" 
          icon={<BsClock />} 
          onClick={ () => toggleFilter("fast") }
          isActive={filters.has("fast")}  
        />
      </li>
      <li className="restaurant-filters__list-item">
        <ToggleBtn 
          text="Low Price" 
          icon={<BsCurrencyDollar />} 
          onClick={ () => toggleFilter("low") } 
          isActive={filters.has("low")}
        />
      </li>
      <li className="restaurant-filters__list-item">
        <ToggleBtn 
          text="Open Now" 
          icon={<BsDoorOpen />} 
          onClick={ () => toggleFilter("open") }
          isActive={filters.has("open")} 
        />
      </li>
    </ul>
  </>
};

export default RestaurantFiltersMain;