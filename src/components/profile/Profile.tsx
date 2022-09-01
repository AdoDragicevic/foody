import { Link } from "react-router-dom";
import { User } from "../../models/user";


const Profile = ({ name, contact }: User) => (
  <article className="profile">

    <h2 className="h-thin txt-center mb-xl">Profile Info</h2>

    <fieldset className="fieldset">
      <legend>Contact</legend>
      <p>Name: {name}</p>
      <address className="profile__email">
        Email: {contact.email}
      </address>
      <address className="profile__phone">
        Phone: {contact.phone}
      </address>
    </fieldset>

    <fieldset className="fieldset">
      <legend>Delivery Address</legend>
      <p>Street: {contact.address.street}</p>
      <p>Street Number: {contact.address.streetNumber}</p>
      <p>Postal Code: {contact.address.postalCode}</p>
      <p>Floor: {contact.address.floor}</p>        
      <p>Comment: {contact.address.comments}</p>
    </fieldset>

    <fieldset className="fieldset">
      <legend>Payment Method</legend>
      <p>Cash</p>
    </fieldset>

    <section className="profile__orders">
      <Link to="/profile/edit" className="btn btn-secondary">
        Edit
      </Link>
    </section>
    
  </article>
);

export default Profile;