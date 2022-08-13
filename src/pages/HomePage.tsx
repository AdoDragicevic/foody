import { Link } from "react-router-dom";
import Feature from "../components/features/Feature";
import Header from "../components/layout/Header";
import UserNav from "../components/navigation/UserNav";
import SpecialOfferList from "../components/restaurants/SpecialOfferList";
import { IoRestaurantOutline } from "react-icons/io5";
import { MdDeliveryDining } from "react-icons/md";
import { RiRecycleLine } from "react-icons/ri";
import PictureCard from "../components/UI/PictureCard";
import employeeImg from "../imgs/employee.jpg";
import restaurantImg from "../imgs/restaurant.jpg";
import teamImg from "../imgs/team.jpg";


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
        <Link to="/restaurants" className="home-page__btn btn btn-main">Find all restaurants</Link>
      </section>
      <svg className="home-page__curve" viewBox="0 0 1440 200">
        <path fill="#FFC244" fill-opacity="1" d="M0,128L120,117.3C240,107,480,85,720,85.3C960,85,1200,107,1320,117.3L1440,128L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z">
        </path>
      </svg>


      <section className="home-page__section home-page__section--special-offers">
        <h3 className="title-tertiary">Special offers</h3>
        <SpecialOfferList />
        <Link to="/restaurants" className="btn btn-secondary">More offers</Link>
      </section>

    
      <section className="home-page__section home-page__section--why-foody">
        <h3 className="title-tertiary">Why Foody?</h3>
        <ul className="home-page__list">
          
          <li className="home-page__list-item">
            <Feature icon={<IoRestaurantOutline />} title="Great food" description="Excellent selection of best restaurants in yout town." />
          </li>

          <li className="home-page__list-item">
            <Feature icon={<RiRecycleLine />} title="Environment" description="We deliver food in 100% recycable materials." />
          </li>

          <li className="home-page__list-item">
            <Feature icon={<MdDeliveryDining />} title="Free delivery" description="Deliveries are completelly fee of charge." />
          </li>
        </ul>
      </section>


      <section className="home-page__section">
        <h2 className="title-tertiary">Work with us!</h2>
        <ul className="home-page__list">
          <li className="home-page__list-item home-page__list-item--picture-card">
            <PictureCard title="Earn extra money as currier" leadsToUrl="#" img={employeeImg}  />
          </li>
          <li className="home-page__list-item home-page__list-item--picture-card">
            <PictureCard title="Sign up as a restaurant partner" leadsToUrl="#" img={restaurantImg}  />
          </li>
          <li className="home-page__list-item home-page__list-item--picture-card">
            <PictureCard title="Join the team building Foody app" leadsToUrl="#" img={teamImg}  />
          </li>
        </ul>
      </section>

    </main>

    <footer>
      Footer
    </footer>
  </>
);

export default HomePage;