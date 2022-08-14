import { RefObject, useRef } from "react";
import { createDebounce } from "../helpers/util";


const useSearch = (): [RefObject<HTMLInputElement>, () => void] => {
  
  const inputRef = useRef<HTMLInputElement>(null);

  const handleInputChange = createDebounce(() => console.log(inputRef.current?.value), 500);

  return [inputRef, handleInputChange];
};

export default useSearch;

