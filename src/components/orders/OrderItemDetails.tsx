import { MenuItem } from "../../models/restaurant";

const OrderItemDetails = ({ name, options }: MenuItem) => {
  return (
    <p>{name}</p>
  )
};

export default OrderItemDetails;