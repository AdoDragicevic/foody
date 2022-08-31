import { AuthResponseData, RequestStatus } from "./htttp";

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