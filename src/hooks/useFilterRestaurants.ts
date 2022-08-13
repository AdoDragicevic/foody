import useFetchRestauratns from "./useFetchRestaurants";
import { FilterFn, ObjectWithId } from "../models/util";
import { Restaurant } from "../models/restaurant";
import { RequestStatus } from "../models/htttp";


const useFilterRestaurants = (criteria: FilterFn, isLoading = false): [(Restaurant & ObjectWithId)[], RequestStatus] => {

  const [restaurants, requestStatus] = useFetchRestauratns(isLoading);

  const list = !restaurants.length ? restaurants : restaurants.filter(criteria);

  return [ list, requestStatus ];
};

export default useFilterRestaurants;