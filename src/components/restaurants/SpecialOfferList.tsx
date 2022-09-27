import useFilterRestaurants from "../../hooks/useFilterRestaurants";
import { RequestStatus } from "../../models/htttp";
import ErrorMsg from "../UI/ErrorMsg";
import RestaurantList from "./RestaurantList";
import RestaurantListLoadingAnimation from "./restaurantLoadingAnimation/RestaurantListLoadingAnimation";



const SpecialOfferList = () => {

  const filterFn = (el: any) => el.discount > 0;

  const [restaurants, requestStatus] = useFilterRestaurants(filterFn, true);

  if (requestStatus === RequestStatus.ERROR) {
    return <ErrorMsg text="Something went wrong. Please, chec your internet connection." />
  }

  if (requestStatus === RequestStatus.LOADING) {
    return <RestaurantListLoadingAnimation num={4} />;
  }

  return <RestaurantList restaurants={restaurants.slice(0, 4)} />;
};

export default SpecialOfferList;