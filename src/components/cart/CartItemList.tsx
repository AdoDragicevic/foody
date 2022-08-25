import { CartItemListProps } from "../../models/props";
import CartItem from "./CartItem";


const CartItemList = ({ items, onRemoveItem }: CartItemListProps) => {
  
  const listItems = Object.keys(items).map( key => {
    const item = items[key];
    return (
      <li key={item.id}>
        <CartItem item={item} onRemove={onRemoveItem} />
      </li>
    );
  });

  return (
    <ul className="cart-item__list">
      {listItems}
    </ul>
  );
  
};

export default CartItemList;