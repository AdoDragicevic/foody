import { Link } from "react-router-dom";
import CartItemList from "../components/cart/CartItemList";
import PageLayoutSecondary from "../components/layout/PageLayoutSecondary";
import useCartOrder from "../hooks/cart/useCartOrder";


const CartPage = () => {

  const {
    restaurantId,
    items, 
    totalPrice, 
    orderStatus, 
    handleRemoveItem, 
    handleOrder 
  } = useCartOrder();

  return (
    <PageLayoutSecondary>
      <main className="cart-page__main">
        <h1 className="h-thin mt-lg">Cart</h1>
        <CartItemList items={items} onRemoveItem={handleRemoveItem} />
        <h2 className="cart-page__price"> &euro; {totalPrice.toFixed(2)} </h2>
        <Link 
          to={`/restaurants${restaurantId ? ("/" + restaurantId) : ""  }`} 
          className="cart-page__btn btn btn-secondary"
        >
          Back to Menu
        </Link>
        <button 
          className="btn btn-main mt-xl" 
          disabled={totalPrice === 0}
          onClick={handleOrder}
        >
          Order Now
        </button>
      </main>
    </PageLayoutSecondary>
  );
};

export default CartPage;