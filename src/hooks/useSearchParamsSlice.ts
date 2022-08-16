import { useSearchParams } from "react-router-dom";
import { getSearchParamsObj } from "../helpers/url";


const useSearchParamsSlice = (key: string): [string | null, (val: string) => void] => {
  const [searchParams, setSearchParams] = useSearchParams();
  
  const value = searchParams.get(key);

  const update = (newVal: string) => {
    const prevSearchParams = getSearchParamsObj(searchParams);
    if (newVal.trim() === "") {
      delete prevSearchParams[key];
      setSearchParams({ ...prevSearchParams });
    }
    else {
      setSearchParams({ ...prevSearchParams, [key]: newVal });
    }
  };

  return [value, update];
};

export default useSearchParamsSlice;