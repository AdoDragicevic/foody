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
      {ordersList.map( (order, i) => (
        <li key={`${order.restaurantId}-${i}`} >
          <OrderItem {...order} />
        </li>
      ))}
    </ul>    
  );

};

export default OrderList;