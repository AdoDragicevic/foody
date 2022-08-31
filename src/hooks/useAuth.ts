import { useEffect, useMemo } from "react";
import useStateAndLocStrg from "./useStateAndLocStrg";
import useHttpStates from "./useHttpStates";
import { AuthResponseData } from "../models/htttp";
import { FetchAuthType } from "../models/htttp";
import { fetchAuth } from "../helpers/http/http-auth";


const useAuth = () => {
  
  const [auth, setAuth] = useStateAndLocStrg<AuthResponseData | null>("foody-auth", null);

  const { sendRequest, requestStatus, data } = useHttpStates<AuthResponseData>(false);

  const dispatch = useMemo(() => ({
    logIn(email: string, password: string) {
      const fetch = fetchAuth.bind(null, email, password, FetchAuthType.LOG_IN);
      sendRequest(fetch);
    },
    logOut() {
     setAuth(null);
    },
    signUp(email: string, password: string) {
      const fetch = fetchAuth.bind(null, email, password, FetchAuthType.SIGN_UP);
      sendRequest(fetch);
    }
  }), [sendRequest, setAuth]);

  useEffect( () => {
    if (data) setAuth(data);
  }, [data, setAuth] );

  return {
    auth,
    requestStatus,
    dispatch
  }
};

export default useAuth;