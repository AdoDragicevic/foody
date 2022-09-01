import { RequestStatus } from "../models/htttp";
import ProfileForm from "../components/profile/ProfileForm";
import PageLayout from "../components/layout/PageLayout";
import useFetchProfile from "../hooks/profile/useFetchProfile";


const ProfileEditPage = () => {

  const [requestStatus, user, profile] = useFetchProfile();

  return (
    <PageLayout>
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
    </PageLayout>
  );

};

export default ProfileEditPage;