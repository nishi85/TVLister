import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';
import Main from './Main';
import Show from "./Show";
import NotFound from "./NotFound";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

class App extends React.Component {
  render() {
    return <Router>
        <div>
          <Header />
          <Switch>
            <Route exact path="/" component={Main} />
            <Route path="/shows/:showId" component={Show} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </Router>;
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
