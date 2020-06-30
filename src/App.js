import React, { Fragment } from 'react';
import {
  HashRouter as Router,
  Route
} from "react-router-dom";
import Header from "./components/Header/Header";
import PlayerName from './components/PlayerName';
import PlayerList from './components/PlayerList';
import CreateTeam from './components/CreateTeam';

const App = () => {
  return (
    <Router>
      <React.Fragment>
        <Route exact path="/">
          <Header />
          <PlayerName />
          <PlayerList />
          <CreateTeam text={"Create Your Team"} />
        </Route>
      </React.Fragment>
    </Router>
  );
}

export default App;
