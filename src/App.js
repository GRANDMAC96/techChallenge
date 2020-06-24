import React, { Fragment } from 'react';
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";

const App = () => {
  return (
    <Router>
      <React.Fragment>
        <h1>Hello World</h1>
      </React.Fragment>
    </Router>
  );
}

export default App;
