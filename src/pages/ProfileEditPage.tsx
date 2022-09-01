import { RequestStatus } from "../models/htttp";
import ProfileForm from "../components/profile/ProfileForm";
import useFetchProfile from "../hooks/profile/useFetchProfile";
import PageLayoutSecondary from "../components/layout/PageLayoutSecondary";


const ProfileEditPage = () => {

  const [requestStatus, user, profile] = useFetchProfile();

  return (
    <PageLayoutSecondary>
      <main className="profile-page__main">

        {
          requestStatus === RequestStatus.LOADING &&
          <p>Loading...</p>
        }
        
        {
          (requestStatus === RequestStatus.ERROR || !user) &&
          <p>Error...</p>
        }
        
        {
          requestStatus === RequestStatus.SUCCESS && !profile &&
          <ProfileForm userId={user.localId} userEmail={user.email} user={null} />
        }

        {
          requestStatus === RequestStatus.SUCCESS && profile &&
          <ProfileForm userId={user.localId} userEmail={user.email} user={profile} />
        }

      </main>
    </PageLayoutSecondary>
  );

};

export default ProfileEditPage;