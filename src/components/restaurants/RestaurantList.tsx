import { RestaurantListProps } from "../../models/props";
import Card from "../UI/Card";
import Restaurant from "./Restaurant";
import { Link } from "react-router-dom";


const RestaurantList = ({ restaurants }: RestaurantListProps) => {
  
  const items = restaurants.map( restaurant => (
    <li className="restaurant-list__item" key={restaurant.id}>
      <Link to={`${restaurant.id}`}>
        <Card>
          <Restaurant {...restaurant} />
        </Card>
      </Link>
    </li>
  ));
  
  return (
    <ul className="restaurant-list">
      {items}
    </ul>
  )
};

export default RestaurantList;