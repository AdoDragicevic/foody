import { Dispatch, useEffect, useState } from "react";


const useStateAndLocStrg = <T>(key: string, initState: T): [T, Dispatch<T>] => {

  const storedVal = localStorage.getItem(key);
  const initVal = storedVal ? JSON.parse(storedVal) : initState;

  const [val, setVal] = useState<T>(initVal);

  useEffect( () => {
    localStorage.setItem(key, JSON.stringify(val));
  }, [val, key] );

  return [val, setVal];
};

export default useStateAndLocStrg;