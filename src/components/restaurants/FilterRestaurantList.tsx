import useFilterRestaurantsBySearchParams from "../../hooks/useFilterRestaurantsBySearchParams";
import RestaurantList from "./RestaurantList";


const FilterRestaurantList = () => {

  const [list] = useFilterRestaurantsBySearchParams();
  
  return <RestaurantList restaurants={list} />;
};

export default FilterRestaurantList;