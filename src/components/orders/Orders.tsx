import { useNavigate } from "react-router-dom";
import useFetchOrders from "../../hooks/orders/useFetchOrders";
import { RequestStatus } from "../../models/htttp";
import OrdersList from "./OrderList";


const Orders = () => {

  const [orders, requestStatus] = useFetchOrders();

  if (requestStatus === RequestStatus.LOADING) {
    return <h2>Loading...</h2>
  }

  if (requestStatus === RequestStatus.ERROR) {
    return <h2>Problem with finding orders</h2>
  }

  if (requestStatus === RequestStatus.SUCCESS && orders) {
    return <OrdersList orders={orders} />
  }

  if (requestStatus === RequestStatus.SUCCESS && !orders) {
    return <h1> You have no previous orders. </h1>
  }

  return null;

};

export default Orders;