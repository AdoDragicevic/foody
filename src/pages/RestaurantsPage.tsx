import Header from "../components/layout/Header";
import Search from "../components/search/Search";
import UserNav from "../components/navigation/UserNav";
import Footer from "../components/layout/Footer";


const RestaurantsPage = () => {
  return (
    <>
      <Header>
        <Search />
        <UserNav />
      </Header>

      <main className="restaurants-page__main">

        <nav className="restaurants-page__filters">

        </nav>


      </main>

      <Footer />
    </>
  );
};

export default RestaurantsPage;