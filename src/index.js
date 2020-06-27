import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from "react-redux";
import "../src/styles/main.css";
import store from "./data/store";
//  import initial from "./data/initial";
import reducers from "./data/reducers";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);



