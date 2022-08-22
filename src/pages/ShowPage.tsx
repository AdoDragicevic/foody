import { useParams } from "react-router-dom";
import PageLayout from "../components/layout/PageLayout";
import RestaurantInfo from "../components/restaurants/RestaurantInfo";
import useFetchRestaurant from "../hooks/useFetchRestaurant";
import RestaurantMenu from "../components/restaurants/restaurantMenu/RestaurantMenu";


const ShowPage = () => {

  const { id } = useParams();

  const [restaurant, requestStatus] = useFetchRestaurant(id!);

  if (!restaurant) {
    return <h2>Restaurant is currently unavailable.</h2>
  }

  console.log(restaurant);

  return (
    <PageLayout>
      <main>
        <RestaurantInfo
          name={restaurant.name}
          averageDeliveryTimeInMinutes={restaurant.averageDeliveryTimeInMinutes}
          contact={restaurant.contact}
          priceRange={restaurant.priceRange}
          rating={restaurant.rating}
        />
        <RestaurantMenu menu={restaurant.menu} />
        {
          // <MenuNav />
        }
      </main>
    </PageLayout>
  );
};

export default ShowPage;