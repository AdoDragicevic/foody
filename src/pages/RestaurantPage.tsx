import { useParams } from "react-router-dom";
import PageLayout from "../components/layout/PageLayout";
import RestaurantInfo from "../components/restaurants/RestaurantInfo";
import useFetchRestaurant from "../hooks/useFetchRestaurant";
import RestaurantMenu from "../components/restaurants/restaurantMenu/RestaurantMenu";
import { RequestStatus } from "../models/htttp";
import ErrorMsg from "../components/UI/ErrorMsg";
import LoadingSpinner from "../components/UI/LoadingSpinner";


const RestaurantPage = () => {

  const { id } = useParams();
  
  const [restaurant, requestStatus] = useFetchRestaurant(id!);

  return (
    <PageLayout>
      <main className="restaurant-page__main">
        { restaurant &&
          <RestaurantInfo
            name={restaurant.name}
            averageDeliveryTimeInMinutes={restaurant.averageDeliveryTimeInMinutes}
            contact={restaurant.contact}
            priceRange={restaurant.priceRange}
            rating={restaurant.rating}
          />
        }
        {
          requestStatus === RequestStatus.ERROR &&
          <ErrorMsg text="Unable to reach this restaurant." />
        }
        {
          requestStatus === RequestStatus.LOADING &&
          <LoadingSpinner />
        }
        {
          restaurant &&
          <RestaurantMenu menu={restaurant.menu} />
        }
      </main>
    </PageLayout>
  );
};

export default RestaurantPage;