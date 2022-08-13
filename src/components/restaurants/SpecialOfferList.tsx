import useFilterRestaurants from "../../hooks/useFilterRestaurants";
import RestaurantList from "./RestaurantList";



const SpecialOfferList = () => {

  const filterFn = (el: any) => el.discount > 0;

  const [restaurants, requestStatus] = useFilterRestaurants(filterFn, true);

  return <RestaurantList restaurants={restaurants.slice(0, 4)} />;
};

export default SpecialOfferList;