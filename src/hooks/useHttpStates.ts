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
      console.log(res);
      if (!res.ok) throw new Error("this is new errror!");
      return res.json();
    })
    .then( (data: T) => {
      setData(data);
      setRequestStatus(RequestStatus.SUCCESS);
      console.log(data);
    })
    .catch( (err) => {
      setRequestStatus(RequestStatus.ERROR);
      console.log("!!!!", err);
    })
  }, []);

  return {
    sendRequest,
    requestStatus,
    data
  }
};

export default useHttpStates;