import Card from "../../UI/Card";
import LoadingCard from "../../UI/LoadingCard";


const RestaurantListLoadingAnimation = ({ num }: { num: number }) => {

  let items: JSX.Element[] = [];

  for (let i = 0; i < num; i++) {
    items.push(
      <li key={i}>
        <Card>
          <LoadingCard />  
        </Card>
      </li>
    )
  }

  return (
    <ul className="restaurant-list">
      {items}
    </ul>   
  )
};

export default RestaurantListLoadingAnimation;