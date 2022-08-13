import { Link } from "react-router-dom";
import { FaListUl } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { FaUserAlt } from "react-icons/fa";


const UserNav = () => (
  <nav className="user-nav">
    <Link to="/profile" className="user-nav__link btn">
      <FaUserAlt />
      <span className="user-nav__tag">Profile</span>
    </Link>
    <Link to="/orders" className="user-nav__link btn">
      <FaListUl />
      <span className="user-nav__tag">Orders</span>
    </Link>
    <Link to="/cart" className="user-nav__link btn">
      <FaShoppingCart />
      <span className="user-nav__tag">Cart</span>
    </Link>
  </nav>
);

export default UserNav;