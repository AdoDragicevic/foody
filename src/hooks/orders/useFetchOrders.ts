import { useContext, useEffect } from "react";
import { Orders } from "../../models/user";
import { RequestStatus } from "../../models/htttp";
import useHttpStates from "../useHttpStates";
import { AuthCtx } from "../../contexts/auth-context";
import { fetchOrders } from "../../helpers/http/http-order";


const useFetchOrders = (): [Orders | null, RequestStatus] => {

  const { auth } = useContext(AuthCtx);

  const [ sendRequest, requestStatus, data ] = useHttpStates<Orders>(true);

  useEffect( () => {
    if (auth?.localId) {
      const fetch = fetchOrders.bind(null, auth.localId);
      sendRequest(fetch);
    }
  }, [auth?.localId, sendRequest]);

  return [data, requestStatus];
};

export default useFetchOrders;