import { CartItemProps } from "../../models/props";


const CartItem = ({ item, onRemove }: CartItemProps) => (
  <article className="cart-item">
    <h2 className="h-tertiary"> {item.menuItem.name} </h2>
    {item.selectedOption && (
      <p className="cart-item__option">
        With {item.selectedOption}
      </p>
    )}
    {item.selectedExtras.length &&
      <p className="cart-item__extras">
        Extra: {item.selectedExtras.map(extra => extra.name).join(", ")}
      </p>
    }
    <p> x {item.quantity} </p>  
    <p className="cart-item__price"> &euro; {item.totalPrice.toFixed(2)} </p>
    <button 
      className="cart-item__btn btn"
      onClick={ () => onRemove(item.id) }
    > 
      x 
    </button>
  </article>
);

export default CartItem;