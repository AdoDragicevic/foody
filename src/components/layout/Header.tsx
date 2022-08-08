import { HeaderProps } from "../../models/props";

const Header = ({ children, className }: HeaderProps) => (
  <header className={`header ${className}`}>
    {children}
  </header>
);

export default Header;