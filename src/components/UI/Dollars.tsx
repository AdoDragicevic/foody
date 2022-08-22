import { getHtmlDollars } from "../../helpers/html";
import { DollarsProps } from "../../models/props";


const Dollars = ({ num, max }: DollarsProps) => {
 
  const fillCssName = "dollars__dollar";
  const emptyCssName = "dollars__dollar dollars__dollar--empty";

  const dollars = getHtmlDollars(max, num, fillCssName, emptyCssName);

  return <div className="dollars"> {dollars} </div>
};

export default Dollars;