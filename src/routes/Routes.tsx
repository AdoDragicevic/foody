import { Routes, Route, Navigate } from "react-router-dom";
import AuthPage from "../pages/AuthPage";
import CartPage from "../pages/CartPage";
import HomePage from "../pages/HomePage";
import IndexPage from "../pages/IndexPage";
import ShowPage from "../pages/ShowPage";


const Router = () => {
  return (
    <Routes>

      <Route path="/" element={ <HomePage /> } />
      
      <Route path="/restaurants" element={ <IndexPage />} />
      
      <Route path="/restaurants/:id" element={ <ShowPage />} />
      
      <Route path="/restaurants/:id/reviews" element={ <p>Restaurant reviews page</p>} />
      
      <Route path="/profile" element={ <p>Profile page</p>} />
      
      <Route path="/profile/new" element={ <p>New profile page</p>} />
      
      <Route path="/orders" element={ <p>Orders page</p>} />
      
      <Route path="/cart" element={ <CartPage /> } />
      
      <Route path="/auth" element={ <AuthPage /> } />

      <Route path="/page-not-found" element={<p>Page not found</p>} />

      <Route path="*" element={<Navigate to="/page-not-found" replace />} />
    
    </Routes>
  )
};

export default Router;