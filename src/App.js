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
          <Header text={"Select Your Team"} />
          <PlayerName />
          <PlayerList />
        </Route>
        <Route exact path="/teampage">
          <Header text={"Teams"} />
          <Team />
        </Route>
      </React.Fragment>
    </Router>
  );
}

export default App;
