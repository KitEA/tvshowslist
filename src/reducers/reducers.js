import {
  SET_SHOWS,
  PREVIOUS_PAGE,
  NEXT_PAGE,
  SORT_SHOWS,
  SET_SORT_ORDER,
  CHANGE_SEARCH_VALUE,
  RESET_PAGE,
  REQUEST_SHOWS
} from "../actions/ActionTypes";
import { combineReducers } from "redux";
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
    case RESET_PAGE:
      return 1;
    default:
      return state;
  }
};

const shows = (state = {
  isFetching: false,
  items: []
}, action) => {
  switch (action.type) {
    case REQUEST_SHOWS:
      return {
        ...state,
        isFetching: true
      }
    case SET_SHOWS:
      return {
        ...state, 
        isFetching: false,
        items: action.shows
      }
    case SORT_SHOWS:
      const sortedShows = orderBy(
        action.shows,
        action.sortKey,
        action.sortOrder
      );
      return sortedShows;
    default:
      return state;
  }
};

const sort = (state = "desc", action) => {
  switch (action.type) {
    case SET_SORT_ORDER:
      return action.sortOrder;
    default:
      return state;
  }
};

const search = (state = "", action) => {
  switch (action.type) {
    case CHANGE_SEARCH_VALUE:
      return action.input;
    default:
      return state;
  }
};

const tvShowsListApp = combineReducers({
  currentPage,
  shows,
  sort,
  search
});

export default tvShowsListApp;
