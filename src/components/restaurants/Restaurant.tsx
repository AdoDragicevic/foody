import { RestaurantProps } from "../../models/props";

const Restaurant = ({ name, id, discount, imgUrl, averageDeliveryTimeInMinutes, rating }: RestaurantProps) => {
  return (
    <article className="restaurant" onClick={() => console.log(id)}>
      <figure className="restaurant__figure">
        <img className="restaurant__img" src={imgUrl} alt="food" />
        <figcaption className="restaurant__name">{name}</figcaption>
        {discount && (
          <figcaption className="restaurant__discount">{`-${discount}%`}</figcaption>
        )}
      </figure>
      <footer className="restaurant__footer">
        <aside className="restaurant__rating">{rating}</aside>
        <aside className="restaurant__delivery-time">{averageDeliveryTimeInMinutes}</aside>
      </footer>
    </article>
  )
};

export default Restaurant;