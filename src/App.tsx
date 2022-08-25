import Router from "./routes/Routes";
import { CartProvider } from "./contexts/cart-context";


const App = () => (
  <CartProvider>
    <Router />
  </CartProvider>
);

export default App;
