import useFilterRestaurantsBySearchParams from "../../hooks/useFilterRestaurantsBySearchParams";
import { RequestStatus } from "../../models/htttp";
import ErrorMsg from "../UI/ErrorMsg";
import RestaurantList from "./RestaurantList";
import RestaurantListLoadingAnimation from "./restaurantLoadingAnimation/RestaurantListLoadingAnimation";


const FilterRestaurantList = () => {

  const [list, requestStatus] = useFilterRestaurantsBySearchParams();

  if (requestStatus === RequestStatus.ERROR) {
    return <ErrorMsg text="Something went wrong. Please, check your internet connection." />;
  }

  if (requestStatus === RequestStatus.LOADING) {
    return <RestaurantListLoadingAnimation num={8} />;
  }

  return <RestaurantList restaurants={list} />;
  
};

export default FilterRestaurantList;