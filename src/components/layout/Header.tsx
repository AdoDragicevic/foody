import { Link } from "react-router-dom";
import { HeaderProps } from "../../models/props";

const Header = ({ children, className }: HeaderProps) => (
  <header className={`header ${className}`}>
    <Link className="header__link" to="/">
      <h2 className="header__logo">Foody</h2>
    </Link>
    {children}
  </header>
);

export default Header;