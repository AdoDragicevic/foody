import { useSearchParams } from "react-router-dom";
import { getSearchParamsObj } from "../helpers/url";
import { ObjectWithId } from "../models/util";
import { Restaurant } from "../models/restaurant";
import { filterRestaurantsByName, filterRestaurantsByFilters } from "../helpers/filter-restaurants";
import useFetchRestauratns from "./useFetchRestaurants";


const useFilterRestaurantsBySearchParams = (): [(Restaurant & ObjectWithId)[]] => {

  const [searchParams] = useSearchParams();
  const [restaurants, requestStatus] = useFetchRestauratns(true);

  const filters = getSearchParamsObj(searchParams);

  let list = [...restaurants];

  if (filters.search && list.length) {
    list = filterRestaurantsByName(list, filters.search);    
  }

  if (filters.criteria && list.length) {
    list = filterRestaurantsByFilters(list, filters.criteria.split("-"));    
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

  return [list];

};

export default useFilterRestaurantsBySearchParams;