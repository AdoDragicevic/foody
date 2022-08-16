import Header from "../components/layout/Header";
import Search from "../components/search/Search";
import UserNav from "../components/navigation/UserNav";
import RestaurantFilters from "../components/restaurants/restaurantFilters/RestaurantFilters";


const RestaurantsPage = () => {

  return (
    <>
      <Header>
        <Search />
        <UserNav />
      </Header>

      <main className="restaurants-page__main">
        <RestaurantFilters />
      </main>
    </>
  );
};

export default RestaurantsPage;