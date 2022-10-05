import { Navigate } from "react-router-dom";
import { RequestStatus } from "../models/htttp";
import useFetchProfile from "../hooks/profile/useFetchProfile";
import Profile from "../components/profile/Profile";
import PageLayoutSecondary from "../components/layout/PageLayoutSecondary";
import LoadingSpinner from "../components/UI/LoadingSpinner";
import ErrorMsg from "../components/UI/ErrorMsg";


const ProfilePage = () => {

  const [requestStatus, , profile] = useFetchProfile();

  return (
    <PageLayoutSecondary>
      <main className="profile-page__main">
        
        {
          requestStatus === RequestStatus.LOADING && 
          <LoadingSpinner />
        }
        
        {
          requestStatus === RequestStatus.ERROR &&
          <ErrorMsg text="Unable to access profile. Please, try again later." />
        }

        {
          requestStatus === RequestStatus.SUCCESS && !profile &&
          <Navigate to="/profile/edit" />
        }
        
        {
          requestStatus === RequestStatus.SUCCESS && profile &&
          <Profile { ...profile } />
        }

      </main>
    </PageLayoutSecondary>
  );
  
};

export default ProfilePage;