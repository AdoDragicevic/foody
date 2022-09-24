import { useCallback, useState } from "react";
import { RequestStatus } from "../models/htttp";


const useHttpStates = <T>(isLoading = false) => {

  const initialRequestStatus = isLoading ? RequestStatus.LOADING : RequestStatus.NONE;
    
  const [requestStatus, setRequestStatus] = useState(initialRequestStatus);
  const [data, setData] = useState<T | null>(null);

  const sendRequest = useCallback( (requestFn: () => Promise<Response>) => {
    setRequestStatus(RequestStatus.LOADING);
    requestFn()
    .then( (res: any) => {
      if (!res.ok) throw new Error(res);
      return res.json();
    })
    .then( (data: T) => {
      setData(data);
      setRequestStatus(RequestStatus.SUCCESS);
    })
    .catch( () => {
      setRequestStatus(RequestStatus.ERROR);
    })
  }, []);

  return {
    sendRequest,
    requestStatus,
    data
  }
};

export default useHttpStates;