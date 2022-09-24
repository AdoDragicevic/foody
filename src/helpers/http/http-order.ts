import { Order } from "../../models/user";


export const fetchAddOrder = (userId: string, order: Order) => (
  fetch(`https://foody-db-default-rtdb.europe-west1.firebasedatabase.app/users/${userId}/orders.json`, {
    method: "POST",
    body: JSON.stringify(order),
    headers: {
      "Content-Type": "application/json"
    }
  })
);

export const fetchOrders = (userId: string) => (
  fetch(`https://foody-db-default-rtdb.europe-west1.firebasedatabase.app/users/${userId}/orders.json`)
);