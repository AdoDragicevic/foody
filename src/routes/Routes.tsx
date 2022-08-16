import { Routes, Route, Navigate } from "react-router-dom";
import HomePage from "../pages/HomePage";
import RestaurantsPage from "../pages/RestaurantsPage";


const Router = () => {
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

      <Route path="/page-not-found" element={<p>Page not found</p>} />

      <Route path="*" element={<Navigate to="/page-not-found" replace />} />
    
    </Routes>
  )
};

export default Router;