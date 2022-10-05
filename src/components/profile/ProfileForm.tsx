import { useState, FormEvent, useEffect } from "react";
import { RequestStatus } from "../../models/htttp";
import { useNavigate } from "react-router-dom";
import { ProfileFormProps } from "../../models/props";
import { useInputValidate } from "../../hooks/form/useInputValidate";
import InputGroup from "../UI/InputGroup";
import useUpdateProfile from "../../hooks/profile/useUpdateProfile";


const ProfileForm = ( { profile }: ProfileFormProps) => {

  const navigate = useNavigate();
  
  const [ sendRequest, requestStatus ] = useUpdateProfile();

  const [wasSubmittedOnce, setWasSubmittedOnce] = useState(false);

  useEffect( () => {
    if (requestStatus === RequestStatus.SUCCESS) {
      navigate("/profile");
    }
  }, [requestStatus, navigate]);

  const name = useInputValidate(profile ? profile.name : "", () => false);
  const phone = useInputValidate(profile ? profile.contact.phone : "", () => false);
  const streetName = useInputValidate(profile ? profile.contact.address.street : "", () => false);
  const streetNumber = useInputValidate(profile ? profile.contact.address.streetNumber : "", () => false);
  const postalCode = useInputValidate(profile ? profile.contact.address.postalCode : "", () => false);
  const floor = useInputValidate(profile ? profile.contact.address.postalCode : "0", () => false);
  const comment = useInputValidate(profile ? profile.contact.address.postalCode : "", () => true);

  const nameErrorMsg = wasSubmittedOnce && !name.isValid ? "Invalid email!" : "";
  const phoneErrorMsg = wasSubmittedOnce && !phone.isValid ? "Invalid phone number!" : "";
  const streetNameErrorMsg = wasSubmittedOnce && !streetName.isValid ? "Street name is required." : "";
  const streetNumberErrorMsg = wasSubmittedOnce && !streetNumber.isValid ? "Street number is required." : "";
  const postalCodeErrorMsg = wasSubmittedOnce && !postalCode.isValid ? "Postal code is required." : "";
  const floorErrorMsg = wasSubmittedOnce && !streetName.isValid ? "Invalid floor number! Please, provide number from -1 to 30." : "";

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setWasSubmittedOnce(true);
    // sendRequest();
  };
  
  return (
    <form className="form" onSubmit={handleSubmit}>

      <h2 className="h-thin txt-center mb-xl">
        {profile ? "Edit" : "Create"} Profile
      </h2>

      <fieldset className="fieldset">
        <legend>Contact</legend>

        <InputGroup 
          name="name"
          type="text"
          value={name.value}
          onChange={name.onChange}
          errorMsg={nameErrorMsg}
        />

        <InputGroup 
          name="phone"
          type="tel"
          value={phone.value}
          onChange={phone.onChange}
          errorMsg={phoneErrorMsg}
        />

      </fieldset>

      <fieldset className="fieldset">
        <legend>Delivery Address</legend>

        <InputGroup 
          name="street name"
          type="text"
          value={streetName.value}
          onChange={streetName.onChange}
          errorMsg={streetNameErrorMsg}
        />

        <InputGroup
          name="street name"
          type="text"
          value={streetName.value}
          onChange={streetName.onChange}
          errorMsg={streetNameErrorMsg}
        />

        <InputGroup 
          name="street number"
          type="text"
          value={streetNumber.value}
          onChange={streetNumber.onChange}
          errorMsg={streetNumberErrorMsg}
        />

        <InputGroup 
          name="postal code"
          type="number"
          value={postalCode.value}
          onChange={postalCode.onChange}
          errorMsg={postalCodeErrorMsg}
        />

        <InputGroup 
          name="floor"
          type="number"
          value={floor.value}
          onChange={floor.onChange}
          errorMsg={floorErrorMsg}
        />

        <InputGroup 
          name="comment"
          type="text"
          value={comment.value}
          onChange={comment.onChange}
          errorMsg=""
        />

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