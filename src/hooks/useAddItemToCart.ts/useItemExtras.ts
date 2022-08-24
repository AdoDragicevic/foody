import { useState } from "react";
import { ExtraOrder } from "../../models/restaurant";


const useItemExtras = (): [ExtraOrder[], (extra: ExtraOrder) => void] => {
  const [selectedExtras, setSelectedExtras] = useState<ExtraOrder[]>([]);
  const change = (extra: ExtraOrder) => {
    setSelectedExtras(ext => {
      const newExtras = [...ext];
      const indx = newExtras.indexOf(extra);
      indx === -1 ? newExtras.push(extra) : newExtras.splice(indx, 1);
      return newExtras;
    });
  };
  return [selectedExtras, change];
}

export default useItemExtras;