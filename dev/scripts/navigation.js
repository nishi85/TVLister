import React from 'react';
import ReactDom from 'react-dom';
import Selection from "./Selection";
import Slider from "./Slider";
import Button from "./Button";
import Header from "./Header";

class Navigation extends React.Component {

  componentDidMount() {
    const genresURL = `https://api.themoviedb.org/3/genre/tv/list?api_key=4b75b5565f5c925d9378f82e67deeebe&language=en-US`;
    fetch(genresURL)
      .then(response => response.json())
      .then(data => this.props.setGenres(data.genres))
      .catch(error => console.log(error));
  }

  render() {
    const { genre, genres, onGenreChange, onChangeYear, onChangeRating, year, rating, onSearchButtonClick } = this.props;



    return <section className="navigation">
        <Header />
        <Selection genre={genre} genres={genres} onGenreChange={onGenreChange} />
        {/* <Slider data={this.state.year} onChange={this.onChange} />
        <Slider data={this.state.rating} onChange={this.onChange} /> */}
        <div className="slider">
          <label>From {year.label}:</label>
          <input type="range" min={year.min} max={year.max} step={year.step} onChange={onChangeYear} defaultValue={year.value} />
          <h3>{year.value}</h3>
        </div>
        <div className="slider">
          <label>Minimum {rating.label}:</label>
          <input type="range" min={rating.min} max={rating.max} step={rating.step} onChange={onChangeRating} defaultValue={rating.value} />
          <h3>{rating.value}</h3>
        </div>
        <Button onClick={onSearchButtonClick} />
      </section>;
  }
}

export default Navigation;