import { SET_SHOWS, SET_POSTER_FOR_SHOW } from "../actions/actions";

const showsAndPosters = (
  state = { shows: [], showsPosters: [] },
  action
) => {
  switch (action.type) {
    case SET_SHOWS:
      return Object.assign({}, state, {
        shows: action.shows
      });
    case SET_POSTER_FOR_SHOW:
      return [
        ...state.showsPosters,
        {
          imgURL: action.imgURL
        }
      ]
    default:
      return state;
  }
};

export default showsAndPosters;