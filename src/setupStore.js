import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import tvShowsListApp from "./reducers/reducers";

export default function setupStore(initialState) {
  return createStore(
    tvShowsListApp,
    { ...initialState },
    applyMiddleware(thunk)
  );
};
