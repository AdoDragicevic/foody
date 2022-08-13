import Header from "../components/layout/Header";
import UserNav from "../components/navigation/UserNav";
import SpecialOfferList from "../components/restaurants/SpecialOfferList";


const HomePage = () => (
  <>
    <Header className="home-page__header">
      <UserNav />
    </Header>

    <main className="home-page__main">

      <section className="home-page__section home-page__section--welcome">
        <div className="home-page__welcome">
          <h1 className="title-primary mt-lg mb-xs">Welcome to Foody!</h1>
          <h3 className="title-tertiary">Best restaurants at your dispsal</h3>
        </div>
        <button className="home-page__btn btn btn-main">Find all restaurants</button>
      </section>

      <section className="home-page__section">
        <h2>Special offers</h2>
        <SpecialOfferList />
      </section>

      <section className="home-page__section">
        <h2>Why Foody?</h2>
      </section>

      <section className="home-page__section">
        <h2>Download the mobile version!</h2>
      </section>

      <section className="home-page__section">
        <h2>Work with us!</h2>
      </section>

    </main>

    <footer>
      Footer
    </footer>
  </>
);

export default HomePage;