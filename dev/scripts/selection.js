import React from "react";
import ReactDom from "react-dom";

class Selection extends React.Component {
  constructor() {
    super();
    this.state = {
      genre: 'comedy'
    };
     this.onGenreChange = this.onGenreChange.bind(this);
}

  onGenreChange(event) {
      console.log(event.target.value);
    this.setState ({
        genre: event.target.value
    })
}

  
  render() {
    return (
      <div className ='selection'>
        <label>Genre</label>
        <select value={this.state.genre} onChange ={this.onGenreChange}>
            <option value="comedy">Comedy</option>
            <option value="action">Action</option>
            <option value="drama">Drama</option>
        </select>


      </div>
    );
  }
}

export default Selection;