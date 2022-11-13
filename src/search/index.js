import './search.css';
import {DebounceInput} from 'react-debounce-input';

const Search = (props) => {
  const { setSearch } = props;

  const onInputChange = (event) => {
    const value = event.target.value;
    console.log("Search Value: ",value);
    setSearch(value);
  }

  return (
    <div className="search-wrapper">
      <DebounceInput type={"text"} debounceTimeout={500} className="search-input" onChange={onInputChange}/>
    </div>
  );
}

export default Search;