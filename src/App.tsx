import Router from "./routes/Routes";
import { CartProvider } from "./contexts/cart-context";
import { AuthProvider } from "./contexts/auth-context";


const App = () => (
  <AuthProvider>
    <CartProvider>
      <Router />
    </CartProvider>
  </AuthProvider>
);

export default App;