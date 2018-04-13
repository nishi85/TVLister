import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';
import Main from './Main';

class App extends React.Component {
    render() {
      console.log("API key:", process.env.REACT_APP_TMDB_API_KEY);
      return (
        <div>
          <Header />
          <Main />
        </div>
      )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
