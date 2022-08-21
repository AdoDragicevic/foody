import { BsClock } from "react-icons/bs";
import { BsStar } from "react-icons/bs";
import { BsCurrencyDollar } from "react-icons/bs";
import { BsCashCoin } from "react-icons/bs";
import { BsDoorOpen } from "react-icons/bs";
import ToggleBtn from "../../UI/ToggleBtn";
import RestaurantFiltersHeader from "./RestaurantFiltersHeader";
import useToggleSearchParam from "../../../hooks/useToggleSearchParam";


const RestaurantFiltersMain = () => {
  
  const [filters, toggleFilter] = useToggleSearchParam("criteria");  
   
  return <>
    <RestaurantFiltersHeader text="Filters" />
    <ul className="restaurant-filters__list">
      <li className="restaurant-filters__list-item">
        <ToggleBtn 
          text="Special Offers" 
          icon={<BsCashCoin />} 
          onClick={ () => toggleFilter("discount") } 
          isActive={filters.has("discount")}
        />
      </li>
      <li className="restaurant-filters__list-item">
        <ToggleBtn 
          text="Top Rated" 
          icon={<BsStar />} 
          onClick={ () => toggleFilter("rating") }
          isActive={filters.has("rating")}
        />
      </li>
      <li className="restaurant-filters__list-item">
        <ToggleBtn 
          text="Fast Delivery" 
          icon={<BsClock />} 
          onClick={ () => toggleFilter("delivery") }
          isActive={filters.has("delivery")}  
        />
      </li>
      <li className="restaurant-filters__list-item">
        <ToggleBtn 
          text="Low Price" 
          icon={<BsCurrencyDollar />} 
          onClick={ () => toggleFilter("price") } 
          isActive={filters.has("price")}
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