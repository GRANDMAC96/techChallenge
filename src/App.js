import React, { Fragment } from 'react';
import {
  HashRouter as Router,
  Route
} from "react-router-dom";
import Header from "./components/Header/Header";
import PlayerName from './components/PlayerName';
import PlayerList from './components/PlayerList';

const App = () => {
  return (
    <Router>
      <React.Fragment>
        <Route exact path="/">
          <Header />
          <PlayerName />
          <PlayerList />
        </Route>
      </React.Fragment>
    </Router>
  );
}

export default App;
