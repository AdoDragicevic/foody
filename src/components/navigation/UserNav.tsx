import { Link } from "react-router-dom";
import { FaListUl } from "react-icons/fa";
import { FaUserAlt } from "react-icons/fa";
import CartLink from "../cart/CartLink";


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
    <CartLink />
  </nav>
);

export default UserNav;