import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartCtx, CartDispatchCtx } from "../contexts/cart-context";
import CartItemList from "../components/cart/CartItemList";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";


const CartPage = () => {
  
  const { restaurantId, items } = useContext(CartCtx);
  const dispatch = useContext(CartDispatchCtx);

  const handleRemoveItem = (itemId: string) => dispatch({ type: "remove_item", itemId });

  let totalPrice = 0;

  for (let key in items) {
    const { price } = items[key].menuItem;
    const { quantity } = items[key];
    totalPrice += price * quantity;
  }

  return (
    <>
      <Header className="pos-relative" />
        <main className="cart-page__main">
          <h1 className="h-thin mt-lg">Cart</h1>
          <CartItemList items={items} onRemoveItem={handleRemoveItem} />
          <h2 className="cart-page__price">
            &euro; {totalPrice.toFixed(2)}
          </h2>
          <Link to={`/restaurants`} className="cart-page__btn btn btn-secondary">
            Back to Menu
          </Link>
          <button className="cart-page__btn btn btn-main" disabled={totalPrice === 0}>
            Order Now
          </button>
        </main>
      <Footer />
    </>
  );
};

export default CartPage;