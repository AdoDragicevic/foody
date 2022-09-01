import { Navigate } from "react-router-dom";
import { RequestStatus } from "../models/htttp";
import useFetchProfile from "../hooks/profile/useFetchProfile";
import Profile from "../components/profile/Profile";
import PageLayoutSecondary from "../components/layout/PageLayoutSecondary";


const ProfilePage = () => {

  const [requestStatus, , user] = useFetchProfile();

  return (
    <PageLayoutSecondary>
      <main className="profile-page__main">
        
        {
          requestStatus === RequestStatus.LOADING && 
          <p>Loading...</p>
        }
        
        {
          requestStatus === RequestStatus.ERROR &&
          <p>Error...</p>
        }

        {
          requestStatus === RequestStatus.SUCCESS && !user &&
          <Navigate to="/profile/edit" />
        }
        
        {
          requestStatus === RequestStatus.SUCCESS && user &&
          <Profile {...user} />
        }

      </main>
    </PageLayoutSecondary>
  );
  
};

export default ProfilePage;