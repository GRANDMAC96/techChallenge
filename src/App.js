import React, { Fragment } from 'react';
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";
import Header from "./components/Header/Header"
import PlayerName from './components/Header/PlayerName/PlayerName';

const App = () => {
  return (
    <Router>
      <React.Fragment>
        <Header />
        <PlayerName />
      </React.Fragment>
    </Router>
  );
}

export default App;
