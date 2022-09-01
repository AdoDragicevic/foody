import PageLayout from "../components/layout/PageLayout";
import Profile from "../components/profile/Profile";
import { Link, Navigate } from "react-router-dom";
import { RequestStatus } from "../models/htttp";
import useFetchProfile from "../hooks/profile/useFetchProfile";


const ProfilePage = () => {

  const [requestStatus, , user] = useFetchProfile();

  return (
    <PageLayout>
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
    </PageLayout>
  );
  
};

export default ProfilePage;