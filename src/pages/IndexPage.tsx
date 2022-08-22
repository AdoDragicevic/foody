import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import Search from "../components/search/Search";
import RestaurantFilters from "../components/restaurants/restaurantFilters/RestaurantFilters";
import FilterRestaurantList from "../components/restaurants/FilterRestaurantList";

const IndexPage = () => {

  return (
    <>
      <Header>
        <Search />
      </Header>

      <main className="index-page__main">
        <RestaurantFilters />
        <FilterRestaurantList />
      </main>

      <Footer />
    </>
  );
};

export default IndexPage;