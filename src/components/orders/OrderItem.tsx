import { Link } from "react-router-dom";
import { CartItem } from "../../models/cart";
import { Order } from "../../models/user";
import OrderItemDetails from "./OrderItemDetails";


const OrderItem = ({ date, items, restaurantId }: Order) => {

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

  //const dateOfOrder = dateFormater(date, "/");

  return (
    <article>
      <h4>{}</h4>
      <ul> {itemListEl} </ul>
      <h4> &euro; {totalPrice}</h4>
      <footer>
        <Link to={`/restaurants/${restaurantId}`}> Visit Restaurant </Link>
        <Link to={`/restaurants/${restaurantId}/reviews`}> Review Restaurant </Link>
      </footer>
    </article>
  );
};

export default OrderItem;