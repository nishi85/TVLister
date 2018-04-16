import React from 'react';
import ReactDom from 'react-dom';
import Selection from "./Selection";
import Slider from "./Slider";

class Navigation extends React.Component {
  constructor() {
    super();
    this.state = {
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
  }

componentDidMount() {
  const genresURL = `https://api.themoviedb.org/3/genre/tv/list?api_key=4b75b5565f5c925d9378f82e67deeebe&language=en-US`;
  fetch(genresURL)
    .then(response => response.json())
    .then(data => this.setState({genres: data.genres }))
    .catch(error => console.log(error));
}



  onGenreChange(event) {
    console.log(event.target.value);
    this.setState({
      genre: event.target.value
    });
  }

  // onChange(data) {
  //   this.setState({
  //     [data.type]: {...this.state[data.type],
  //       value: data.value
  //     }
  //   });
  // };

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

  render() {
    return (
      <section className="navigation">
        <Selection
          genre={this.state.genre}
          genres ={this.state.genres}
          onGenreChange={this.onGenreChange}
        />
        {/* <Slider data={this.state.year} onChange={this.onChange} />
        <Slider data={this.state.rating} onChange={this.onChange} /> */}
        <div className="slider">
          <label>{this.state.year.label}</label>
          <input
            type="range"
            min={this.state.year.min}
            max={this.state.year.max}
            step={this.state.year.step}
            onChange={this.onChangeYear}
            defaultValue={this.state.year.value}
          />
          <h3>{this.state.year.value}</h3>
        </div>
        <div className="slider">
          <label>{this.state.rating.label}</label>
          <input
            type="range"
            min={this.state.rating.min}
            max={this.state.rating.max}
            step={this.state.rating.step}
            onChange={this.onChangeRating}
            defaultValue={this.state.rating.value}
          />
          <h3>{this.state.rating.value}</h3>
        </div>
      </section>
    );
  }
}

export default Navigation;