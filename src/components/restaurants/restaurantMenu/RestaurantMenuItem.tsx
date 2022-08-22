import { MenuItem } from "../../../models/restaurant";
import Card from "../../UI/Card";


const RestaurantMenuItem = ({ name, price, description, id }: MenuItem) => {
  return (
    <Card>
      <h5>{name}</h5>
      <p>{description}</p>
      {price}
    </Card>
  )
};

export default RestaurantMenuItem;