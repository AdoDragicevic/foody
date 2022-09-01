import { FormEvent, useEffect } from "react";
import useHttpStates from "../../hooks/useHttpStates";
import { User } from "../../models/user";
import { fetchReplaceProfile } from "../../helpers/http/http-profile";
import { RequestStatus } from "../../models/htttp";
import { useNavigate } from "react-router-dom";


interface ProfileFormProps {
  userId: string;
  userEmail: string;
  user: User | null;
}


const ProfileForm = ( { userId, userEmail, user }: ProfileFormProps) => {

  const navigate = useNavigate();
  
  const { sendRequest, requestStatus } = useHttpStates(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    const id = userId;
    const email = userEmail;

    const newProfile: User = {
      id,
      name: "Marko",
      contact: {
        email,
        phone: "091 200 2071",
        address: {
          street: "Ilica",
          streetNumber: "163a",
          postalCode: 10000,
          floor: 2,
          comments: "No comment",
        }
      },
      orders: user ? user.orders : []
    };
    const fetch = fetchReplaceProfile.bind(null, newProfile);
    sendRequest(fetch);
  };

  useEffect( () => {
    if (requestStatus === RequestStatus.SUCCESS) {
      navigate("/profile");
    }
  }, [requestStatus, navigate]);
  
  return (
    <form className="profile__form" onSubmit={handleSubmit}>

      <h2 className="h-thin txt-center mb-xl">
        {user ? "Edit" : "Create"} Profile
      </h2>

      <fieldset className="fieldset">
        <legend>Contact</legend>
        <label>
          Name
          <input type="text" />
        </label>
        <label>
          Phone
          <input type="tel" />
        </label>
      </fieldset>

      <fieldset className="fieldset">
        <legend>Delivery Address</legend>
        
      </fieldset>

      <button
        type="submit" 
        onClick={handleSubmit}
        disabled={requestStatus === RequestStatus.LOADING}
      >
        Save
      </button>
    </form>
  );
};

export default ProfileForm;