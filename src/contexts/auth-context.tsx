import { createContext } from "react";
import useAuth from "../hooks/useAuth";
import { RequestStatus } from "../models/htttp";
import { ChildrenProp } from "../models/props";
import { AuthContext } from "../models/auth";


export const AuthCtx = createContext<AuthContext>({
  auth: null,
  requestStatus: RequestStatus.NONE,
  dispatch: {
    logIn() {},
    logOut() {},
    signUp() {}
  }
});


export const AuthProvider = ({ children }: ChildrenProp): JSX.Element => {
  
  const auth = useAuth();

  return <AuthCtx.Provider value={auth}> { children } </AuthCtx.Provider>;

};