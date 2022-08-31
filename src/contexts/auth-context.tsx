import { createContext, useEffect, useMemo } from "react";
import { fetchAuth } from "../helpers/http/http-auth";
import useHttpStates from "../hooks/useHttpStates";
import useStateAndLocStrg from "../hooks/useStateAndLocStrg";
import { AuthResponseData, FetchAuthType, RequestStatus } from "../models/htttp";
import { ChildrenProp } from "../models/props";


export interface AuthContextDispatch {
  logIn: (email: string, password: string) => void;
  logOut: () => void;
  signUp: (email: string, password: string) => void;
}

export interface AuthContext {
  auth: AuthResponseData | null;
  requestStatus: RequestStatus;
  dispatch: AuthContextDispatch;
}


export const AuthCtx = createContext<AuthContext>({
  auth: null,
  requestStatus: RequestStatus.NONE,
  dispatch: {
    logIn() {},
    logOut() {},
    signUp() {}
  }
});



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


export const AuthProvider = ({ children }: ChildrenProp): JSX.Element => {
  
  const auth = useAuth();

  return <AuthCtx.Provider value={auth}> { children } </AuthCtx.Provider>;

};