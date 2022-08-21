import { useSearchParams } from "react-router-dom";
import useFetchRestauratns from "../../hooks/useFetchRestaurants";
import RestaurantList from "./RestaurantList";

const UrlSearchParamsToObj = (usp: URLSearchParams): Record<string, string> => {
  const obj: Record<string, string> = {};
  for (const entry of usp.entries()) {
    const [key, value] = entry;
    obj[key] = value;
  }
  return obj;
}


const FilterRestaurantList = () => {

  const [searchParams] = useSearchParams();
  const [restaurants, requestStatus] = useFetchRestauratns(true);

  const filters = UrlSearchParamsToObj(searchParams);

  let list = [...restaurants];

  if (filters.search && list.length) {
    list = list.filter(restaurant => {
      const restaurantName = restaurant.name.toLowerCase();
      const searchTerm = filters.search.toLowerCase();
      return restaurantName.includes(searchTerm);
    });
  }

  if (filters.filter && list.length) {
    const criteria = filters.filter.split("-");
    if (criteria.includes("special")) {}
    if (criteria.includes("top")) {}
    if (criteria.includes("fast")) {}
    if (criteria.includes("low")) {}
    if (criteria.includes("open")) {}
  }

  if (filters.food && list.length) {
    const foods = filters.food.split("-");
    list = list.filter(restaurant => {
      for (let food of foods) {
        if (restaurant.menu[food]) {
          return true;
        }
      }
      return false;
    })
  }
  
  return <RestaurantList restaurants={list} />;
};

export default FilterRestaurantList;