import { useContext } from "react";
import useHttpStates from "../useHttpStates";
import { AuthCtx } from "../../contexts/auth-context";
import { RequestStatus } from "../../models/htttp";
import { User } from "../../models/user";


const useUpdateProfile = (): [(profile: User) => void, RequestStatus, any] => {
  
  const { auth } = useContext(AuthCtx);
  
  if (!auth) throw new Error("useFetchProfiles requires user authentication");

  const [ sendRequest, requestStatus, data ] = useHttpStates<any>(false);

  const updateProfile = (profile: User) => {
    // sendRequest();
    //const fetch = fetchReplaceProfile.bind(null, newProfile);
    //sendRequest(fetch);
  };

  return [updateProfile, requestStatus, data];
};

export default useUpdateProfile;