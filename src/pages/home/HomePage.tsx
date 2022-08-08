import Header from "../../components/layout/Header";
import UserNav from "../../components/navigation/UserNav";

const HomePage = () => (
  <>
    <Header className="home-page__header">
      <h2>Foody</h2>
      <UserNav />
    </Header>

    <main className="home-page__main">

      <section className="home-page__section">
        <h1>Welcome section</h1>
      </section>

      <section className="home-page__section">
        <h2>Special offers</h2>
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