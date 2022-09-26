import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { CartCtx, CartDispatchCtx } from "../../contexts/cart-context";
import { Order } from "../../models/user";
import useHttpStates from "../useHttpStates";
import { AuthCtx } from "../../contexts/auth-context";
import { fetchAddOrder } from "../../helpers/http/http-order";
import { RequestStatus } from "../../models/htttp";
import { getCartItemsTotalPrice } from "../../helpers/cart";
import useFetchRestaurant from "../useFetchRestaurant";


const useCartOrder = () => {
  
  const navigate = useNavigate();

  const { auth } = useContext(AuthCtx);
  
  const { restaurantId, items } = useContext(CartCtx);
  
  const dispatch = useContext(CartDispatchCtx);

  const [ sendRequest, orderStatus ] = useHttpStates<Order>();

  const [ restaurant ] = useFetchRestaurant(restaurantId);

  const restaurantName = restaurant?.name || null;

  useEffect( () => {
    if (orderStatus === RequestStatus.SUCCESS) {
      dispatch({ type: "remove_all" });
    }
  }, [orderStatus, dispatch]);

  const handleRemoveItem = (itemId: string) => {
    dispatch({ type: "remove_item", itemId });
  }

  const handleOrder = async () => {
    if (!auth) {
      navigate("/auth");
      return;
    }
    if (!restaurantName) {
      return;
    }
    const restaurant = { id: restaurantId, name: restaurantName };
    const order = new Order(restaurant, items);
    const userId = auth.localId;
    const fetch = fetchAddOrder.bind(null, userId, order);
    sendRequest(fetch);
  };

  const totalPrice = getCartItemsTotalPrice(items);

  return {
    restaurantId,
    restaurantName,
    items,
    totalPrice,
    orderStatus,
    handleRemoveItem,
    handleOrder
  }
}

export default useCartOrder;