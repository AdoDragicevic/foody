import { IoSearch } from "react-icons/io5";
import useSearch from "../../hooks/useSearch";


const Search = () => {

  const [inputRef, defaultVal, updateInput, resetInput] = useSearch();

  return (
    <label className="search">
      <input 
        className="search__input" 
        type="text" 
        placeholder="Search..."
        defaultValue={defaultVal}
        ref={inputRef}
        onChange={updateInput}
      />
      <i className="search__icon">
        <IoSearch />
      </i>
      { 
        defaultVal !== "" && (
        <button className="search__reset btn" onClick={resetInput}>
          <span>x</span>
        </button>
        )
      }
      
    </label>
  );
};

export default Search;