import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

//router
import { Provider } from "react-redux";
import { HashRouter } from "react-router-dom";
//Reducer
import { searchRobots } from "./Store/reducers/searchRobots";
import { requestRobots } from "./Store/reducers/requestRobots";

//external packages
import { logger } from "redux-logger";
import { createStore, applyMiddleware, combineReducers } from "redux";
import tunkMiddleware from "redux-thunk";
//css generater
import "tachyons";


import Home from "./Containers/Home/Home";

const rootReducer = combineReducers({
  searchRobots,
  requestRobots
});
// const logger = createLogger;
const store = createStore(rootReducer, applyMiddleware(tunkMiddleware, logger));
ReactDOM.render(
  <Provider store={store}>
    <HashRouter>
      <Home />
    </HashRouter>
  </Provider>,
  document.getElementById("root")
);


