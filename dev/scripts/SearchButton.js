import React from "react";
import ReactDom from "react-dom";

const SearchButton = ({ onClick }) => (
  <div className="search-button">
    <button onClick={onClick}>Search</button>
  </div>
);

export default SearchButton;
