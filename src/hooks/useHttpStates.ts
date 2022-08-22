import { useCallback, useState } from "react";

import { RequestStatus } from "../models/htttp";


const useHttpStates = <T>(requestFn: () => Promise<Response>, isLoading = false) => {

  const initialRequestStatus = isLoading ? RequestStatus.LOADING : RequestStatus.NONE;
  
  const [requestStatus, setRequestStatus] = useState(initialRequestStatus);
  const [data, setData] = useState<T | null>(null);

  const sendRequest = useCallback(() => {
    setRequestStatus(RequestStatus.LOADING);
    requestFn()
    .then( (res: any) => {
      if (!res.ok) throw new Error();
      return res.json();
    })
    .then( (data: T) => {
      setData(data);
      setRequestStatus(RequestStatus.SUCCESS);
    })
    .catch( (err) => {
      setRequestStatus(RequestStatus.ERROR);
      console.log(err);
    })
  }, [requestFn]);

  return {
    sendRequest,
    requestStatus,
    data
  }
};

export default useHttpStates;