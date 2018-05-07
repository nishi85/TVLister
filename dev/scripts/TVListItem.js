import React from 'react';
import ReactDom from 'react-dom';
import { Link } from "react-router-dom";


const TVListItem = (show) => {
  const imgUrl = `https://image.tmdb.org/t/p/w342/${show.img}`;

  return (
    <li className="TVitem">
        <Link to={`/shows/${show.id}`} className="thumbnail">
        <img src={imgUrl} alt="" />
        <div className="show-description">
          <h3>{show.name}</h3>
          <h4> <span>Average Rating:</span> {show.rating}</h4>
        </div>
      </Link>
    </li>
  );
};


export default TVListItem;