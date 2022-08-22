import { ChildrenProp } from "../../models/props";
import Footer from "./Footer";
import Header from "./Header";


const PageLayout = ({ children }: ChildrenProp) => (
  <>
    <Header />
    <div className="mt-header-height" />
    {children}
    <Footer />
  </>
);

export default PageLayout;