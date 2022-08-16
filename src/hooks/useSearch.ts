import { RefObject, useRef } from "react";
import { createDebounce } from "../helpers/util";
import useSearchParamsSlice from "./useSearchParamsSlice";


const useSearch = (): [RefObject<HTMLInputElement>, string, () => void, () => void] => { 
  const [search, updateSearch] = useSearchParamsSlice("search");
  const inputRef = useRef<HTMLInputElement>(null);
  const inputDefaultVal = search || "";
  const resetInput = () => {
    inputRef.current!.value = "";
    updateSearch("");
  }
  const handleInputChange = createDebounce( 
    () => updateSearch(inputRef.current!.value), 
    500
  );
  return [inputRef, inputDefaultVal, handleInputChange, resetInput];
};

export default useSearch;

