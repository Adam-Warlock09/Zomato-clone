import "../styles/TitleBox.css"
import SearchBar from "./SearchBar";

const TitleBox = () => {
  return (
    <div className="title-container">
      <img src="https://b.zmtcdn.com/web_assets/8313a97515fcb0447d2d77c276532a511583262271.png" className="zomato-logo" alt=""/>
      <h2>Discover the best food & drinks in Bengaluru</h2>
      <SearchBar></SearchBar>
    </div>
  );
}

export default TitleBox