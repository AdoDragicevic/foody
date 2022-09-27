import { Link } from "react-router-dom";
import { CartItem } from "../../models/cart";
import { Order } from "../../models/user";
import OrderItemDetails from "./OrderItemDetails";


const OrderItem = ({ date, items, restaurant }: Order) => {

  const itemsList: CartItem[] = [];

  for (const key in items) {
    const item = items[key];
    itemsList.push(item);
  };

  const itemListEl = itemsList.map( ({ id, menuItem, selectedOption, selectedExtras }) => (
    <li key={id}>
      <OrderItemDetails 
        id={id}
        name={menuItem.name}
        description={menuItem.name}
        price={menuItem.price} 
        options={[...selectedOption]}
      />
    </li>
  ));

  const totalPrice = itemsList.reduce( (acc, curr) => (
    acc += curr.quantity * curr.menuItem.price
  ), 0);

  return (
    <article className="order-item">
      <h4 className="order-item__date">{date}</h4>
      <h2 className="h-tertiary order-item__restaurant">{restaurant.name}</h2>
      <ul className="order-item__details">
        {itemListEl}
      </ul>
      <h4 className="order-item__price"> &euro; {totalPrice}</h4>
      <footer className="order-item__footer">
        <Link
          className="order-item__restaurant-link" 
          to={`/restaurants/${restaurant.id}`}
        > 
          Visit Restaurant 
        </Link>
        <Link 
          className="order-item__review-link"
          to={`/restaurants/${restaurant.id}/reviews`}
        > 
          Review Restaurant 
        </Link>
      </footer>
    </article>
  );
};

export default OrderItem;