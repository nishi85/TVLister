import React from "react";
import ReactDom from "react-dom";
import { Link } from "react-router-dom";

const NotFound = () => (
  <div>
    <h3>We couldn't find what you were looking for :(</h3>
    <Link to="/">Click Here to Browse Shows</Link>
  </div>
);

export default NotFound;
