import { Order } from "../../models/user";
import { OrderListProps } from "../../models/props";
import OrderItem from "./OrderItem";


const OrderList = ({ orders }: OrderListProps) => {

  const ordersList: Order[] = [];

  for (const key in orders) {
    const order = orders[key];
    ordersList.push(order);
  }

  return (
    <ul className="orders-list">
      {ordersList.reverse().map( (order, i) => (
        <li className="orders-list__item" key={`${order.restaurant.id}-${i}`} >
          <OrderItem {...order} />
        </li>
      ))}
    </ul>
  );

};

export default OrderList;