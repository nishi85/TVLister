import React from "react";
import ReactDom from "react-dom";
import TVListItem from "./TVListItem";
import axios from"axios";

class Shows extends React.Component {
  constructor() {
    super();
    this.state = {
      shows: []
    }
  }

  componentDidMount() {
    const apiUrl = `https://api.themoviedb.org/3/tv/top_rated?api_key=4b75b5565f5c925d9378f82e67deeebe&language=en-US&page=1`;

    fetch(apiUrl)
      .then(response => response.json())
      .then((data ) => { 
        console.log(data.results);
        this.setState({
            shows: [...data.results]
        })
      })
      .catch(error => console.log(error));
    }
  
  render() {
    return (
      <section>
        <ul className="shows">
          {this.state.shows.map(show => {
             return <TVListItem key={show.id} name={show.name} show={show} img={show.poster_path} rating = {show.vote_average} />;
          })}
        </ul>
      </section>
    );
  }
}

export default Shows;