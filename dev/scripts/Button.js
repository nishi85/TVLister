import React from "react";
import ReactDom from "react-dom";

const Button = ({ onClick }) => (
  <div className="search-button">
    <button onClick={onClick}>Search</button>
  </div>
);

export default Button;
