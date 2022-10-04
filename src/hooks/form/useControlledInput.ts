import { ChangeEvent, useState } from "react";


const useControlledInput = (initVal = ""): [string, (e: ChangeEvent<HTMLInputElement>) => void] => {
  const [val, setVal] = useState(initVal);
  const update = (e: ChangeEvent<HTMLInputElement>) => {
    setVal(e.target.value);
  };
  return [val, update];
};

export default useControlledInput;