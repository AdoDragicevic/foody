import { CartItemProps } from "../../models/props";


const CartItem = ({ item, onRemove }: CartItemProps) => (
  <article className="cart-item">
    <h2 className="h-tertiary"> {item.menuItem.name} </h2>
    <p className="cart-item__description">
      {item.menuItem.description}
    </p>
    {item.selectedOption && (
      <p className="cart-item__option">
        With {item.selectedOption}
      </p>
    )}
    <p className="cart-item__extras">
      Extra: {item.selectedExtras.map(extra => extra.name).join(", ")}
    </p>
    <p> x {item.quantity} </p>
    <div className="cart-item__price">
      <p> &euro; {item.menuItem.price} </p>
      <p> Total: {item.menuItem.price * item.quantity} </p>
    </div>
    <button 
      className="cart-item__btn btn"
      onClick={ () => onRemove(item.id) }
    > 
      x 
    </button>
  </article>
);

export default CartItem;