import { createStore, applyMiddleware, compose } from "redux";
import reducer from "./reducers";
import initialState from "./initial";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    reducer,
    initialState,
    composeEnhancers(applyMiddleware())
);

export default store;