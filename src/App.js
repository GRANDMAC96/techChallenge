import React, { Fragment } from 'react';
import {
  HashRouter as Router,
  Route
} from "react-router-dom";
import Header from "./components/Header/Header";
import PlayerName from './components/PlayerName';
import PlayerList from './components/PlayerList';
import Team from './components/Team/Team';

const App = () => {
  return (
    <Router>
      <React.Fragment>
        <Route exact path="/">
          <Header />
          <PlayerName />
          <PlayerList />
        </Route>
        <Route exact path="/teampage">
          <Team />
        </Route>
      </React.Fragment>
    </Router>
  );
}

export default App;
