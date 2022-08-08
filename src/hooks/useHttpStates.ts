import { useCallback, useState } from "react";

import { RequestStatus } from "../models/htttp";


const useHttpStates = (requestFn: () => Promise<any>, isLoading = false) => {

  const initialRequestStatus = isLoading ? RequestStatus.LOADING : RequestStatus.NONE;
  
  const [requestStatus, setRequestStatus] = useState(initialRequestStatus);
  const [error, setError] = useState("");
  const [data, setData] = useState<any>(null);

  const sendRequest = useCallback(() => {
    setRequestStatus(RequestStatus.LOADING);
    requestFn()
    .then( (res: any) => {
      if (!res.ok) throw new Error("Failed to load data");
      return res.json();
    })
    .then( (data: any) => {
      setData(data);
      setRequestStatus(RequestStatus.SUCCESS);
    })
    .catch( (err: string) => {
      setError(err);
      setRequestStatus(RequestStatus.ERROR);
    })
  }, [requestFn]);

  return {
    sendRequest,
    requestStatus,
    data,
    error
  }
};

export default useHttpStates;