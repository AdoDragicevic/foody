import { useSearchParams } from "react-router-dom";
import { getSearchParamsObj } from "../helpers/url";
import { ObjectWithId } from "../models/util";
import { Restaurant } from "../models/restaurant";
import { getFilteredRestaurants } from "../helpers/filter-restaurants";
import useFetchRestauratns from "./useFetchRestaurants";
import { RequestStatus } from "../models/htttp";


const useFilterRestaurantsBySearchParams = (): [(Restaurant & ObjectWithId)[], RequestStatus] => {

  const [searchParams] = useSearchParams();
  const [restaurants, requestStatus] = useFetchRestauratns(true);

  const filters = getSearchParamsObj(searchParams);
  const list = getFilteredRestaurants(restaurants, filters);

  return [list, requestStatus];

};

export default useFilterRestaurantsBySearchParams;