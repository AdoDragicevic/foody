import Header from "../components/layout/Header";
import Search from "../components/search/Search";
import UserNav from "../components/navigation/UserNav";
import RestaurantFilters from "../components/restaurants/restaurantFilters/RestaurantFilters";
import FilterRestaurantList from "../components/restaurants/FilterRestaurantList";


const IndexPage = () => {

  return (
    <>
      <Header>
        <Search />
        <UserNav />
      </Header>

      <main className="index-page__main">
        <RestaurantFilters />
        <FilterRestaurantList />
      </main>
    </>
  );
};

export default IndexPage;