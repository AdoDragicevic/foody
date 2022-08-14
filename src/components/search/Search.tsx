import { IoSearch } from "react-icons/io5";
import useSearch from "../../hooks/useSearch";


const Search = () => {

  const [inputRef, handleInputChange] = useSearch();

  return (
    <label className="search">
      <input 
        className="search__input" 
        type="text" 
        placeholder="Search..."
        ref={inputRef}
        onChange={handleInputChange}
      />
      <i className="search__icon">
        <IoSearch />
      </i>
    </label>
  );
};

export default Search;