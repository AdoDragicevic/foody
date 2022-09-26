import { useEffect } from "react";
import useHttpStates from "../hooks/useHttpStates";
import { fetchRestaurant } from "../helpers/http/http-restaurants";
import { Restaurant } from "../models/restaurant";
import { RequestStatus } from "../models/htttp";


const useFetchRestaurant = (restaurantId: string): [Restaurant | null, RequestStatus] => {

  const [ sendRequest, requestStatus, data ] = useHttpStates<Restaurant>(true);

  useEffect( () => {
    sendRequest(fetchRestaurant.bind(null, restaurantId))
  }, [restaurantId, sendRequest]);

  return [data, requestStatus];
};

export default useFetchRestaurant;