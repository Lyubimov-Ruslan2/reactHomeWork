import react from "react";
import "./Header.styles.css";
import SearchBar from "../SearchBar/searchBar";

const Header = (props) => {
  return (
    <header>
      <div class="image">
        <div className="flex-items">
          <p className="logo">netflixroulette</p>
          <button className="btn">+ add movie</button>
        </div>
        <h1>FIND YOUR MOViE</h1>
        <SearchBar />
      </div>
    </header>
  );
};

export default Header;
