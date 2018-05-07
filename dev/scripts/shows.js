import React from "react";
import ReactDom from "react-dom";
import TVListItem from "./TVListItem";


const Movies = ({ shows, page, onPageIncrease, onPageDecrease }) => (
  <section className ="sectionShows">
    <ul className="shows">
      {shows.map(show => {
        console.log(show);
        return (
          <TVListItem
            key={show.id}
            id={show.id}
            name={show.name}
            show={show}
            img={show.poster_path}
            rating={show.vote_average}
          />
        );
      })}
    </ul>
    <div className="pagination">
      <button onClick={onPageDecrease}>Previous</button>
      <span>{`Page ${page}`}</span>
      <button onClick={onPageIncrease}>Next</button>
    </div>
  </section>
);

export default Movies;




// class Shows extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       shows: []
//     };
//   }

 

//   render() {
//     return (
//       <section>
//         <ul className="shows">
//           {this.state.shows.map(show => {
//             console.log(show);
//             return (
//               <TVListItem
//                 key={show.id}
//                 name={show.name}
//                 show={show}
//                 img={show.poster_path}
//                 rating={show.vote_average}
//               />
//             );
//           })}
//         </ul>
//       </section>
//     );
//   }
// }

// export default Shows;



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