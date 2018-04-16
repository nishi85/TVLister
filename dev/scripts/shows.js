import React from "react";
import ReactDom from "react-dom";
import TVListItem from "./TVListItem";

class Shows extends React.Component {
  constructor() {
    super();
    this.state = {
      shows: []
    };
  }

  componentDidMount() {
    this.fetchShows(this.props.url);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.url !== nextProps.url) {
      this.fetchShows(nextProps.url);
    }
  }

  fetchShows(url) {
    fetch(url)
      .then(response => response.json())
      .then(data => this.storeShows(data))
      .catch(error => console.log(error));
  }

  storeShows(data){
    const shows = data.results.map(result => {
      const {
        id,
        genre_ids,
        poster_path,
        title,
        vote_average,
        release_date
      } = result;
      return {
        id,
        genre_ids,
        poster_path,
        title,
        vote_average,
        release_date
      };
    });

    this.setState({ shows });
  };

  render() {
    return (
      <section>
        <ul className="shows">
          {this.state.shows.map(show => {
            console.log(show);
            return (
              <TVListItem
                key={show.id}
                name={show.name}
                show={show}
                img={show.poster_path}
                rating={show.vote_average}
              />
            );
          })}
        </ul>
      </section>
    );
  }
}

export default Shows;



  // fetch(apiUrl)
  //     .then(response => response.json())
  //     .then((data ) => { 
  //       console.log(data.results);
  //       this.setState({
  //           shows: [...data.results]
  //       })
  //     })
  //     .catch(error => console.log(error));
  //   }