import React from 'react';
import ReactDom from 'react-dom';
import Navigation from'./Navigation';
import Shows from './Shows';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Main extends React.Component {
  constructor() {
    super();
    this.state = {
      shows: [],
      total_pages: 1,
      page: 1,
      showsUrl: `https://api.themoviedb.org/3/tv/top_rated?api_key=4b75b5565f5c925d9378f82e67deeebe&language=en-US`,
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
    this.fetchShows = this.fetchShows.bind(this);
    this.storeShows = this.storeShows.bind(this);
    this.onPageIncrease = this.onPageIncrease.bind(this);
    this.onPageDecrease = this.onPageDecrease.bind(this);
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
    const { genres, year, rating, page } = this.state;
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
      `page=${page}`;

    this.setState({ showsUrl });
  }

  fetchShows(url) {
    fetch(url)
      .then(response => response.json())
      .then(data => this.storeShows(data))
      .catch(error => console.log(error));
  }

  storeShows(data) {
    const shows = data.results.map(result => {
      const {
        id,
        genre_ids,
        poster_path,
        name,
        vote_average,
        release_date
      } = result;
      return {
        id,
        genre_ids,
        poster_path,
        name,
        vote_average,
        release_date
      };
    });

    this.setState({ shows, total_pages: data.total_pages });
  }

  componentDidMount() {
    this.fetchShows(this.state.showsUrl);
  }

  componentWillUpdate(nextProps, nextState) {
    if (this.state.moviesUrl !== nextState.moviesUrl) {
      this.fetchMovies(nextState.moviesUrl);
    }
  }

  onPageIncrease() {
    const { page, total_pages } = this.state;
    const nextPage = page + 1;
    if (nextPage <= total_pages) {
      this.setState({ page: nextPage });
    }
  }

  onPageDecrease() {
    const { page } = this.state;
    const nextPage = page - 1;
    if (nextPage > 0) {
      this.setState({ page: nextPage });
    }
  }

  componentWillUpdate(nextProps, nextState) {
    if (this.state.showsUrl !== nextState.showsUrl) {
      this.fetchShows(nextState.showsUrl);
    }
    if (this.state.page !== nextState.page) {
      this.generateUrl();
    }
  }

  onSearchButtonClick() {
    this.generateUrl();
  }

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
        <Shows shows={this.state.shows} 
          page={this.state.page}
          onPageIncrease={this.onPageIncrease}
          onPageDecrease={this.onPageDecrease}
        />
      </section>
    );
  }
}

export default Main;