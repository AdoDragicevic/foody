import { ChildrenProp } from "../../models/props";


const Card = ({ children }: ChildrenProp) => {
  return (
    <div className="card">
      {children}
    </div>
  )
};

export default Card;