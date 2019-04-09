import { SET_SHOWS, SET_POSTER_FOR_SHOW } from "../actions/actions";

const initialState = {
  shows: [], 
  showsPosters: []
}

const showsAndPosters = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case SET_SHOWS:
      return Object.assign({}, state, {
        shows: action.shows
      });
    case SET_POSTER_FOR_SHOW:
      return Object.assign({}, state, {
        showsPosters: [...state.showsPosters, action.imgURL]
      });
    default:
      return state;
  }
};

export default showsAndPosters;