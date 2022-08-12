import { HeaderProps } from "../../models/props";

const Header = ({ children, className }: HeaderProps) => (
  <header className={`header ${className}`}>
    <h2 className="header__logo">Foody</h2>
    {children}
  </header>
);

export default Header;