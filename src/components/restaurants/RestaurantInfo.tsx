import { MdOutlineDeliveryDining } from "react-icons/md";
import { TiLocationArrow } from "react-icons/ti";
import { BsTelephoneFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import StarsRating from "../UI/StarsRating";
import Dollars from "../UI/Dollars";
import { RestaurantInfoProps } from "../../models/props";


const RestaurantInfo = ({ name, averageDeliveryTimeInMinutes, rating, priceRange, contact }: RestaurantInfoProps) => (
  <article className="restaurant-info">
    <h2 className="h-secondary">{name}</h2>
    <div className="restaurant-info__rating">
      <StarsRating rating={rating} />
      <Link className="restaurant-info__link" to="/reviews">All reviews</Link>
    </div>
    <div className="restaurant-info__data">
      <MdOutlineDeliveryDining />
      <span>{averageDeliveryTimeInMinutes} min</span>
    </div>
    <Dollars num={priceRange + 1} max={3} />
    <div className="restaurant-info__data">
      <TiLocationArrow />
      <Link className="restaurant-info__link" to="#">{contact.address.street} {contact.address.streetNumber}</Link>
    </div>
    <div className="restaurant-info__data">
      <BsTelephoneFill size={18} />
      <a className="restaurant-info__link" href={`tel:${contact.phone}`}> {contact.phone} </a>
    </div>
  </article>
);

export default RestaurantInfo;