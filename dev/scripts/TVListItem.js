import React from 'react';
import ReactDom from 'react-dom';

const TVListItem = (show) => {
  // const { name, poster_path } = show;
  const imgUrl = `https://image.tmdb.org/t/p/w342/${show.img}`;

  return (
    <li className="TVitem">
      <img src= {imgUrl} alt="" />
      <span>{show.name} Average Rating:{show.rating}</span>
    </li>
  );
};


export default TVListItem;