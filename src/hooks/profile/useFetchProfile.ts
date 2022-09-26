import { useContext, useEffect } from "react";
import useHttpStates from "../useHttpStates";
import { AuthCtx } from "../../contexts/auth-context";
import { fetchProfile } from "../../helpers/http/http-profile";
import { User } from "../../models/user";
import { AuthResponseData, RequestStatus } from "../../models/htttp";


const useFetchProfile = (): [RequestStatus, AuthResponseData, User | null] => {
  
  const { auth } = useContext(AuthCtx);
  
  if (!auth) throw new Error("useFetchProfiles requires user authentication");

  const [ sendRequest, requestStatus, data ] = useHttpStates<User>(false);

  useEffect( () => {
    if (auth.localId) {
      const fetch = fetchProfile.bind(null, auth.localId);
      sendRequest(fetch);
    }
  }, [sendRequest, auth.localId]);

  return [requestStatus, auth, data];
};

export default useFetchProfile;