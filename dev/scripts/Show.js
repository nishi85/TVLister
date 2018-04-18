import React from "react";
import ReactDom from "react-dom";
import LoadingShow from "./LoadingShow";

class Show extends React.Component {
   constructor() {
    super();
    this.state = {
    isLoading: true,
    show: {}
  };
}  

  componentDidMount() {
    const { showId } = this.props.match.params;
    const showUrl = `https://api.themoviedb.org/3/tv/${showId}?api_key=4b75b5565f5c925d9378f82e67deeebe&language=en-US`;
    fetch(showUrl)
      .then(response => response.json())
      .then(data => this.setState({ show: data }))
      .catch(error => console.log("Error:", error));
  }

   render() {
    const {
      name,
      backdrop_path,
      first_air_date,
      genres,
      overview,
      vote_average,
      status
    } = this.state.show;

    // const year = release_date ? release_date.substring(0, 4) : null;

    const imgUrl = `http://image.tmdb.org/t/p/w1280${backdrop_path}`;

    return (
     <div className="movie-page"> 
       <div>
              <div className="show-image">
                <img src={imgUrl} alt="" />
              </div>
              <div className="show-details">
                <h1>
                  {name}
                  <span>({status})</span>
                </h1>
                {/* <section className="genres">
                  {genres.map((genre, index) => (
                    <div key={genre.id}>
                      <span>{genre.name}</span>
                      {index < genres.length - 1 && (
                        <span className="separator">|</span>
                      )}
                    </div>
                  ))}
                </section> */}
                <h5>
                  Rating:
                  <span>{vote_average}</span>
                </h5>
                {/* <h5>
                  Runtime:
                  <span>{`${runtime} min`}</span>
                </h5> */}
                <h4>Overview</h4>
                <p>{overview}</p>
              </div>
            </div>
     </div> 
    )
  }
}



export default Show;
