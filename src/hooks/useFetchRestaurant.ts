import { useCallback, useEffect } from "react";
import useHttpStates from "../hooks/useHttpStates";
import { getFetchRestaurant } from "../helpers/http";
import { Restaurant } from "../models/restaurant";
import { RequestStatus } from "../models/htttp";


const useFetchRestaurant = (restaurantId: string): [Restaurant | null, RequestStatus] => {

  const fetchRestaurant = useCallback( () => (getFetchRestaurant(restaurantId))(), [restaurantId]);

  const { data, requestStatus, sendRequest } = useHttpStates<Restaurant>(fetchRestaurant, true);

  useEffect( () => sendRequest(), [sendRequest]);

  return [data, requestStatus];
};

export default useFetchRestaurant;