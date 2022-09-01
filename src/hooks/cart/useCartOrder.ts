import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { CartCtx, CartDispatchCtx } from "../../contexts/cart-context";
import { Order } from "../../models/user";
import useHttpStates from "../useHttpStates";
import { AuthCtx } from "../../contexts/auth-context";
import { fetchAddOrder } from "../../helpers/http/http-order";
import { RequestStatus } from "../../models/htttp";
import { getCartItemsTotalPrice } from "../../helpers/cart";


const useCartOrder = () => {
  
  const navigate = useNavigate();

  const { auth } = useContext(AuthCtx);
  
  const { restaurantId, items } = useContext(CartCtx);
  
  const dispatch = useContext(CartDispatchCtx);

  const { sendRequest, requestStatus: orderStatus } = useHttpStates<Order>();

  useEffect( () => {
    if (orderStatus === RequestStatus.SUCCESS) {
      dispatch({ type: "remove_all" });
    }
  }, [orderStatus, dispatch]);

  const handleRemoveItem = (itemId: string) => {
    dispatch({ type: "remove_item", itemId });
  }

  const handleOrder = () => {
    if (!auth) {
      navigate("/auth");
      return;
    }
    const order = new Order(restaurantId, items);
    const userId = auth.localId;
    const fetch = fetchAddOrder.bind(null, userId, order);
    sendRequest(fetch);
  };

  const totalPrice = getCartItemsTotalPrice(items);

  return {
    restaurantId,
    items,
    totalPrice,
    orderStatus,
    handleRemoveItem,
    handleOrder
  }
}

export default useCartOrder;