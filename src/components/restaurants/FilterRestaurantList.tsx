import { useSearchParams } from "react-router-dom";
import useFetchRestauratns from "../../hooks/useFetchRestaurants";
import { PriceRange } from "../../models/price";
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

  let list = restaurants;

  if (filters.search && list.length) {
    list = list.filter(restaurant => {
      const restaurantName = restaurant.name.toLowerCase();
      const searchTerm = filters.search.toLowerCase();
      return restaurantName.includes(searchTerm);
    });
  }

  if (filters.filter && list.length) {
    const criteria = new Set( filters.filter.split("-") );
    if (criteria.has("special")) {
      list = list.filter(restaurant => !!restaurant.discount);
    }
    if (criteria.has("top")) {
      list = list.filter(restaurant => restaurant.rating === 5);
    }
    if (criteria.has("fast")) {
      list = list.filter(restaurant => restaurant.averageDeliveryTimeInMinutes <= 30);
    }
    if (criteria.has("low")) {
      list = list.filter(restaurant => restaurant.priceRange === PriceRange.$);
    }
    if (criteria.has("open")) {
      list = list.filter(restaurant => restaurant.isOpen);
    }
  }

  if (filters.food && list.length) {
    const foods = new Set( filters.food.split("-") );
    list = list.filter(restaurant => {
      for (const foodType of restaurant.typeOfFood) {
        if (foods.has(foodType)) return true;
      }
      return false;
    })
  }
  
  return <RestaurantList restaurants={list} />;
};

export default FilterRestaurantList;