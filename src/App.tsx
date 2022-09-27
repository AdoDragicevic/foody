import Router from "./routes/Routes";
import { CartProvider } from "./contexts/cart-context";
import { AuthProvider } from "./contexts/auth-context";
import ScrollToTop from "./components/router/ScrollToTop";


const App = () => (
  <AuthProvider>
    <CartProvider>
      <ScrollToTop />
      <Router />
    </CartProvider>
  </AuthProvider>
);

export default App;