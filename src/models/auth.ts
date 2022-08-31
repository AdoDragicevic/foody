import { Dispatch } from "react";
import { AuthResponseData } from "./htttp";


export type AuthCtxProviderValue = [AuthResponseData | null, Dispatch<AuthResponseData | null>];