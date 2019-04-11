import {
  SET_SHOWS,
  PREVIOUS_PAGE,
  NEXT_PAGE,
  SORT_SHOWS,
  SET_SORT_ORDER
} from "../actions/actions";
import { combineReducers, compose } from "redux";
import { orderBy } from "lodash";

const currentPage = (state = 1, action) => {
  switch (action.type) {
    case PREVIOUS_PAGE:
      if (state > 1) {
        return state - 1;
      } else {
        return state;
      }
    case NEXT_PAGE:
      return state + 1;
    default:
      return state;
  }
};

const shows = (state = [], action) => {
  switch (action.type) {
    case SET_SHOWS:
      return Object.assign([], state, action.shows);
    case SORT_SHOWS:
      let sortedShows = orderBy(action.shows, action.sortKey, action.sortOrder);
      return sortedShows;
    default:
      return state;
  }
};

const sort = (
  state = "desc",
  action
) => {
  switch (action.type) {
    case SET_SORT_ORDER:
      return action.sortOrder;
    default:
      return state;
  }
};

const tvShowsListApp = combineReducers({
  currentPage,
  shows,
  sort
});

export default tvShowsListApp;
