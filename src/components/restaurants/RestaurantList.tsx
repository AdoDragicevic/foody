import { RestaurantListProps } from "../../models/props";
import Card from "../UI/Card";
import Restaurant from "./Restaurant";


const RestaurantList = ({ restaurants }: RestaurantListProps) => {
  
  const items = restaurants.map(restaurant => (
    <li className="restaurant-list__item" key={restaurant.id}>
      <Card>
        <Restaurant {...restaurant} />
      </Card>
    </li>
  ));
  
  return (
    <ul className="restaurant-list">
      {items}
    </ul>
  )
};

export default RestaurantList;