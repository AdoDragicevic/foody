import useFetchOrders from "../../hooks/orders/useFetchOrders";
import { RequestStatus } from "../../models/htttp";
import ErrorMsg from "../UI/ErrorMsg";
import LoadingSpinner from "../UI/LoadingSpinner";
import OrdersList from "./OrderList";


const Orders = () => {

  const [orders, requestStatus] = useFetchOrders();

  if (requestStatus === RequestStatus.LOADING) {
    return <LoadingSpinner />
  }

  if (requestStatus === RequestStatus.ERROR) {
    return <ErrorMsg text="Unable to retrieve you orders. Please, check your internet connection." />
  }

  if (requestStatus === RequestStatus.SUCCESS && orders) {
    return <OrdersList orders={orders} />
  }

  if (requestStatus === RequestStatus.SUCCESS && !orders) {
    return <h2 className="h-secondary txt-center mt-lg"> You have no previous orders. </h2>
  }

  return null;

};

export default Orders;