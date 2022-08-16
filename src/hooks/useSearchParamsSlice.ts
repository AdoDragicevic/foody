import { useSearchParams } from "react-router-dom";
import { getSearchParamsObj } from "../helpers/url";


const useSearchParamsSlice = (key: string): [string | null, (val: string) => void] => {
  const [searchParams, setSearchParams] = useSearchParams();
  
  const value = searchParams.get(key);

  const update = (newVal: string) => {
    const prevSearchParams = getSearchParamsObj(searchParams);
    setSearchParams({
      ...prevSearchParams,
      [key]: newVal
    });
  };

  return [value, update];
};

/*
const useUpdateSearchParams = (key: string) => {
  const [searchParams, setSearchParams] = useSearchParams();
  
  const updateParamVal = (val: string) => {
    const currVal = searchParams.get(key);
    console.log(currVal);
    const currVals = currVal ? currVal.split("-") : [];
    const indx = currVals.indexOf(val);
    if (indx === -1) {
      currVals.push(val);
    }
    else {
      currVals.splice(indx, 1);
    }
    const newVal = currVals.join("-");
    setSearchParams({
      ...searchParams,
      [key]: newVal
    });
  };

  useEffect(() => {
    console.log(searchParams.getAll(key));
  }, [key, searchParams])

  return updateParamVal;
};  

*/

export default useSearchParamsSlice;