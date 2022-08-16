import useSearchParamsSlice from "./useSearchParamsSlice";


const useToggleSearchParam = (searchParamName: string): [Set<unknown>, (filter: string) => void] => {
  
  const [filterSearchParam, updateFilterSearchParam] = useSearchParamsSlice(searchParamName);

  const filters = new Set(filterSearchParam?.split("-"));
  
  const handleToggleFilter = (filter: string) => {
    filters.has(filter) ? filters.delete(filter) : filters.add(filter);
    const filterUrl = Array.from(filters).join("-");
    updateFilterSearchParam(filterUrl);
  };

  return [filters, handleToggleFilter];

};

export default useToggleSearchParam;