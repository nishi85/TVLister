import React from 'react';
import ReactDom from 'react-dom';
import Navigation from'./Navigation';
import Shows from './Shows';

class Main extends React.Component {
  constructor() {
    super();
    this.state = {
      showsUrl: `https://api.themoviedb.org/3/tv/top_rated?api_key=4b75b5565f5c925d9378f82e67deeebe&language=en-US&page=1`,  
      genre: "comedy",
      genres: [],
      year: {
        label: "year",
        min: 1990,
        max: 2017,
        step: 1,
        value: 2017
      },
      rating: {
        label: "rating",
        min: 0,
        max: 10,
        step: 1,
        value: 8
      }
    };
    this.onGenreChange = this.onGenreChange.bind(this);
    this.onChangeYear = this.onChangeYear.bind(this);
    this.onChangeRating = this.onChangeRating.bind(this);
    this.setGenres = this.setGenres.bind(this);
    this.onSearchButtonClick = this.onSearchButtonClick.bind(this);
    this.generateUrl = this.generateUrl.bind(this);
  }

  setGenres(genres) {
    this.setState({ genres });
  }

  onGenreChange(event) {
    console.log(event.target.value);
    this.setState({
      genre: event.target.value
    });
  }

  onChangeYear(event) {
    console.log(event.target.value);
    const year = this.state.year;
    year.value = event.target.value;
    this.setState({
      year
    });
  }

  onChangeRating(event) {
    console.log(event.target.value);
    const rating = this.state.rating;
    rating.value = event.target.value;
    this.setState({
      rating
    });
  }

  generateUrl() {
    const { genres, year, rating } = this.state;
    const selectedGenre = genres.find(genre => genre.name === this.state.genre);
    const genreId = selectedGenre.id;

    const showsUrl =
      `https://api.themoviedb.org/3/discover/tv?` +
      `api_key=4b75b5565f5c925d9378f82e67deeebe&` +
      `language=en-US&sort_by=popularity.desc&` +
      `with_genres=${genreId}&` +
      `release_date.gte=${year.value}-01-01&` +
      `release_date.lte=${year.max}-12-31&` +
      `vote_average.gte=${rating.value}&` +
      `vote_average.lte=${rating.max}&` +
      `page=1&`;

    this.setState({ showsUrl });
  }

  onSearchButtonClick(){
    this.generateUrl();
  };

  render() {
    return (
      <section className="main">
        <Navigation
          onChangeYear={this.onChangeYear}
          onChangeRating={this.onChangeRating}
          onGenreChange={this.onGenreChange}
          setGenres={this.setGenres}
          onSearchButtonClick={this.onSearchButtonClick}
          {...this.state}
        />
        <Shows url={this.state.showsUrl} />
      </section>
    );
  }
}

export default Main;