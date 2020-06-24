import React, { Fragment } from 'react';
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";
import Header from "../src/Header/Header"

const App = () => {
  return (
    <Router>
      <React.Fragment>
        <Header />
      </React.Fragment>
    </Router>
  );
}

export default App;
