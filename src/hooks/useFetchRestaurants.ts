import { useEffect } from "react";
import { fetchRestaurants } from "../helpers/http/http-restaurants";
import useHttpStates from "../hooks/useHttpStates";
import { Restaurant } from "../models/restaurant";
import { RequestStatus } from "../models/htttp";
import { ObjectWithId } from "../models/util";


const useFetchRestaurants = (isLoading = false): [(Restaurant & ObjectWithId)[], RequestStatus] => {

  const { data, requestStatus, sendRequest } = useHttpStates<{ [id: string]: Restaurant }>(isLoading);

  useEffect( () => sendRequest(fetchRestaurants), [sendRequest]);

  // in db Restaurant is stored without id, after fetch we add the key under which it's stored as its id
  const list: [] | (Restaurant & ObjectWithId)[] = ( () => {
    if (data === null) return [];
    return Object.keys(data).map(key => ({ ...data[key], id: key }));
  } )();

  return [list, requestStatus];
};

export default useFetchRestaurants;