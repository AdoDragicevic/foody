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
      <OrderItemDetails 
        id={id}
        name={menuItem.name}
        description={menuItem.name}
        price={menuItem.price} 
        options={[...selectedOption]}
      />
  ));

  const totalPrice = itemsList.reduce( (acc, curr) => (
    acc += curr.quantity * curr.menuItem.price
  ), 0);

  return (
    <article>
      <h2>{restaurant.name}</h2>
      <h4>{date}</h4>
      <div>
        {itemListEl}
      </div>
      <h4> &euro; {totalPrice}</h4>
      <footer>
        <Link to={`/restaurants/${restaurant.id}`}> Visit Restaurant </Link>
        <Link to={`/restaurants/${restaurant.id}/reviews`}> Review Restaurant </Link>
      </footer>
    </article>
  );
};

export default OrderItem;