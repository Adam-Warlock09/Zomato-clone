import "../styles/searchbar.css"
import DropDown from "./DropDown"

const SearchBar = () => {
  return (
    <div className="search-bar">
        <DropDown></DropDown>
        <input type="text" name="" id="" className="search-input" placeholder="Search for restaurant, cuisine or a dish"/>
    </div>
  )
}

export default SearchBar