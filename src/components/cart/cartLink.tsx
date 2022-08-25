import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { useContext } from "react";
import { CartCtx } from "../../contexts/cart-context";


const CartLink = () => {

  const { items } = useContext(CartCtx);

  let numOfItems = 0;

  for (const key in items) {
    numOfItems += items[key].quantity;
  };

  return (
    <Link to="/cart" className="user-nav__link btn">
      {numOfItems > 0 && (
        <div className="user-nav__notification">
          {numOfItems}
        </div>
      )}
      <FaShoppingCart />
      <span className="user-nav__tag">Cart</span>
    </Link>
  );
};

export default CartLink;