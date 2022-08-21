import { useSearchParams } from "react-router-dom";
import { getSearchParamsObj } from "../helpers/url";
import { ObjectWithId } from "../models/util";
import { Restaurant } from "../models/restaurant";
import { getFilteredRestaurants } from "../helpers/filter-restaurants";
import useFetchRestauratns from "./useFetchRestaurants";


const useFilterRestaurantsBySearchParams = (): [(Restaurant & ObjectWithId)[]] => {

  const [searchParams] = useSearchParams();
  const [restaurants] = useFetchRestauratns(true);

  const filters = getSearchParamsObj(searchParams);
  const list = getFilteredRestaurants(restaurants, filters);

  return [list];

};

export default useFilterRestaurantsBySearchParams;