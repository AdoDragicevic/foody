import { RequestStatus } from "../models/htttp";
import ProfileForm from "../components/profile/ProfileForm";
import useFetchProfile from "../hooks/profile/useFetchProfile";
import PageLayoutSecondary from "../components/layout/PageLayoutSecondary";
import ErrorMsg from "../components/UI/ErrorMsg";
import LoadingSpinner from "../components/UI/LoadingSpinner";


const ProfileEditPage = () => {

  const [getRequestStatus, user, profile] = useFetchProfile();

  return (
    <PageLayoutSecondary>
      <main className="profile-page__main">

        {
          getRequestStatus === RequestStatus.LOADING &&
          <LoadingSpinner />
        }
        
        {
          (getRequestStatus === RequestStatus.ERROR || !user) &&
          <ErrorMsg text="Unable to load profile. Please, try again." />
        }

        {
          getRequestStatus === RequestStatus.SUCCESS &&
          <ProfileForm profile={profile} />
        }

      </main>
    </PageLayoutSecondary>
  );

};

export default ProfileEditPage;