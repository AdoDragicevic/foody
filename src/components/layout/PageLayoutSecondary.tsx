import { ChildrenProp } from "../../models/props";
import Header from "./Header";
import Footer from "./Footer";


const PageLayoutSecondary = ({ children }: ChildrenProp) => (
  <>
    <Header className="pos-relative" />
    { children }
    <Footer />
  </>
);

export default PageLayoutSecondary;