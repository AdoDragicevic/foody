import { useContext } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { AuthCtx } from "../contexts/auth-context";
import AuthPage from "../pages/AuthPage";
import CartPage from "../pages/CartPage";
import HomePage from "../pages/HomePage";
import RestaurantsPage from "../pages/RestaurantsPage";
import RestaurantPage from "../pages/RestaurantPage";
import ProfilePage from "../pages/ProfilePage";
import ProfileEditPage from "../pages/ProfileEditPage";
import OrdersPage from "../pages/OrdersPage";


const Router = () => {
  
  const { auth } = useContext(AuthCtx);
  
  return (
    <Routes>

      <Route path="/" element={ <HomePage /> } />
      
      <Route path="/restaurants" element={ <RestaurantsPage />} />
      
      <Route path="/restaurants/:id" element={ <RestaurantPage />} />
      
      <Route path="/restaurants/:id/reviews" element={ <p>Restaurant reviews page</p>} />
      
      <Route path="/profile" element={ auth ? <ProfilePage /> : <AuthPage /> } />
      
      <Route path="/profile/edit" element={ auth ? <ProfileEditPage /> : <AuthPage /> } />
      
      <Route path="/orders" element={ auth ? <OrdersPage /> : <AuthPage /> } />
      
      <Route path="/cart" element={ <CartPage /> } />
      
      <Route path="/auth" element={ auth ? <Navigate to="/profile" /> : <AuthPage /> } />

      <Route path="/page-not-found" element={<p>Page not found</p>} />

      <Route path="*" element={<Navigate to="/page-not-found" replace />} />
    
    </Routes>
  )
};

export default Router;