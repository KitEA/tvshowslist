import React from "react";
import { render } from "react-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import App from "./containers/App";
import tvShowsListApp from "./reducers/index";
import "./index.css";
import thunk from "redux-thunk";
import { createLogger } from 'redux-logger';

const loggerMiddleware = createLogger();

const store = createStore(tvShowsListApp, applyMiddleware(thunk, loggerMiddleware));

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
