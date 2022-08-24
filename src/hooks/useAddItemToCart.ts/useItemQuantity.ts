import { useState } from "react";


const useItemQuantity = (): [number, () => void, () => void] => {
  const [quantity, setQuantity] = useState(1);
  const decrement = () => setQuantity(q => q - 1);
  const increment = () => setQuantity(q => q + 1);
  return [quantity, decrement, increment];
};

export default useItemQuantity;