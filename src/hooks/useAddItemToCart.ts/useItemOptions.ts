import { ChangeEvent, useState } from "react";
import { MenuItem } from "../../models/restaurant";


const useItemOptions = (item: MenuItem): [string, (e: ChangeEvent<HTMLInputElement>) => void] => {
  const [selectedOption, setSelectedOption] = useState(item.options ? item.options[0] : "");
  const change = (e: ChangeEvent<HTMLInputElement>) => setSelectedOption(e.target.value);
  return [selectedOption, change];
};

export default useItemOptions;