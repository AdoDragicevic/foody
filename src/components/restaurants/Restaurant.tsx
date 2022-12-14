import { MdOutlineDeliveryDining } from "react-icons/md";
import { RestaurantProps } from "../../models/props";
import StarsRating from "../UI/StarsRating";

const Restaurant = ({ name, discount, imgUrl, averageDeliveryTimeInMinutes, rating }: RestaurantProps) => (
  <article className="restaurant">
    <figure className="restaurant__figure">
      <img className="restaurant__img" src={imgUrl} alt="food" />
      <figcaption className="restaurant__name">{name}</figcaption>
      {discount && (
        <figcaption className="restaurant__discount">{`-${discount}%`}</figcaption>
      )}
    </figure>
    <footer className="restaurant__footer">
      <aside className="restaurant__rating">
        <StarsRating rating={rating} />
      </aside>
      <aside className="restaurant__delivery">
        <i className="restaurant__delivery-icon">
          <MdOutlineDeliveryDining />
        </i>
        <span className="restaurant__delivery-time">
        {averageDeliveryTimeInMinutes} min
        </span>
      </aside>
    </footer>
  </article>
);

export default Restaurant;