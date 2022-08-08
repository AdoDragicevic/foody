import { Link } from "react-router-dom";

const UserNav = () => (
  <nav className="user-nav">
    <Link to="/profile" className="user-nav__link">
      Profile
    </Link>
    <Link to="/orders" className="user-nav__link">
      Orders
    </Link>
    <Link to="/cart" className="user-nav__link">
      Cart
    </Link>
  </nav>
);

export default UserNav;