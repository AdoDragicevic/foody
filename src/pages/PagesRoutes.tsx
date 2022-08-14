import { Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";
import RestaurantsPage from "./RestaurantsPage";


const PagesRoutes = () => {
  return (
    <Routes>

      <Route path="/" element={ <HomePage /> } />
      
      <Route path="/restaurants" element={ <RestaurantsPage />} />
      
      <Route path="/restaurants/:id" element={ <p>Restaurant page</p>} />
      
      <Route path="/restaurants/:id/reviews" element={ <p>Restaurant reviews page</p>} />
      
      <Route path="/profile" element={ <p>Profile page</p>} />
      
      <Route path="/profile/new" element={ <p>New profile page</p>} />
      
      <Route path="/orders" element={ <p>Orders page</p>} />
      
      <Route path="/cart" element={ <p>Cart page</p>} />
      
      <Route path="/auth" element={ <p>Auth page</p>} />
    
    </Routes>
  )
};

export default PagesRoutes;