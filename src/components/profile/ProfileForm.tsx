import { FormEvent, useEffect } from "react";
import useHttpStates from "../../hooks/useHttpStates";
import { User } from "../../models/user";
import { fetchReplaceProfile } from "../../helpers/http/http-profile";
import { RequestStatus } from "../../models/htttp";
import { useNavigate } from "react-router-dom";
import { ProfileFormProps } from "../../models/props";


const ProfileForm = ( { userId, userEmail, user }: ProfileFormProps) => {

  const navigate = useNavigate();
  
  const [ sendRequest, requestStatus ] = useHttpStates(false);

  useEffect( () => {
    if (requestStatus === RequestStatus.SUCCESS) {
      navigate("/profile");
    }
  }, [requestStatus, navigate]);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    const id = userId;
    const email = userEmail;
    const orders = user?.orders || null;

    const newProfile: User = {
      id,
      name: "Ado",
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
      orders
    };
    const fetch = fetchReplaceProfile.bind(null, newProfile);
    sendRequest(fetch);
  };
  
  return (
    <form className="form" onSubmit={handleSubmit}>

      <h2 className="h-thin txt-center mb-xl">
        {user ? "Edit" : "Create"} Profile
      </h2>

      <fieldset className="fieldset">
        <legend>Contact</legend>

        <label className="label" htmlFor="name">Name</label>
        <input className="input" id="name" type="text" />

        <label className="label" htmlFor="phone">Phone</label>
        <input className="input" id="phone" type="tel" />
      </fieldset>

      <fieldset className="fieldset">
        <legend>Delivery Address</legend>

        <label className="label" htmlFor="street-name">Street Name</label>
        <input className="input" id="street-name" type="text" />

        <label className="label" htmlFor="street-num">Street Number</label>
        <input className="input" id="street-num" type="text" />

        <label className="label" htmlFor="postal-code">Postal Code</label>
        <input className="input" id="postal-code" type="number" />

        <label className="label" htmlFor="floor">Floor</label>
        <input className="input" id="floor" type="number" defaultValue={0} />

        <label className="label" htmlFor="comment">Comment</label>
        <input className="input" id="comment" type="fieldset" />
      </fieldset>

      <fieldset className="fieldset">
        <legend>Payment Method</legend>

        <div className="profile__form-btns">
          <input type="radio" name="payment-method" />
          <label htmlFor="cash">Cash</label>
          
          <input type="radio" name="payment-method" />
          <label htmlFor="card">Card</label>
        </div>
        
        <div className="profile__form-card">

        </div>

      </fieldset>

      <footer>
        <button
          className="btn btn-secondary"
          type="submit" 
          onClick={handleSubmit}
          disabled={requestStatus === RequestStatus.LOADING}
        >
          Save
        </button>
      </footer>

    </form>
  );
};

export default ProfileForm;