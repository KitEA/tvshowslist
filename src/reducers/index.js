import {
  SET_SHOWS,
  SET_POSTER_FOR_SHOW,
  PREVIOUS_PAGE,
  NEXT_PAGE
} from "../actions/actions";
import { combineReducers } from "redux";

const currentPage = (state = 1 , action) => {
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
    default:
      return state;
  }
};

const posters = (state = [], action) => {
  switch (action.type) {
    case SET_POSTER_FOR_SHOW:
      return Object.assign([], state, action.postersForShows); //[...state, action.imgURL];
    default:
      return state;
  }
};

const tvShowsListApp = combineReducers({
  currentPage,
  shows,
  posters
});

export default tvShowsListApp;
