import {
  SET_SHOWS,
  PREVIOUS_PAGE,
  NEXT_PAGE,
  SORT_SHOWS,
  SET_SORT_ORDER,
  SEARCH_BY_COLUMN
} from "../actions/actions";
import { combineReducers } from "redux";
import { orderBy, filter } from "lodash";

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
      const sortedShows = orderBy(action.shows, action.sortKey, action.sortOrder);
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

const search = (state = "", action) => {
  switch (action.type) {
    case SEARCH_BY_COLUMN:
      const matchedElements = filter(action.shows, action.input);
      return matchedElements;
    default:
      return state;
  }
}

const tvShowsListApp = combineReducers({
  currentPage,
  shows,
  sort,
  search
});

export default tvShowsListApp;
