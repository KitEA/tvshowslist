export const SORT_BY_COLUMN = "SORT_BY_COLUM";
export const SEARCH_BY_COLUMN = "SEARCH_BY_COLUMN";

export const SET_SHOWS = "SET_SHOWS";
export const SET_POSTER_FOR_SHOW = "SET_POSTER_FOR_SHOW";
//export const REQUEST_SHOWS_AND_POSTERS = "REQUEST_SHOWS_AND_POSTERS";

export const sortByColumn = key => {
  return {
    type: SORT_BY_COLUMN,
    key
  };
};

export const setShows = shows => {
  return {
    type: SET_SHOWS,
    shows
  };
};

export const setPosterForShow = imgURL => {
  return {
    type: SET_POSTER_FOR_SHOW,
    imgURL
  };
};

// async functions

export const fetchShows = () => {
  return dispatch => {
    return fetch("https://api.trakt.tv/shows/trending/?page=1&limit=1", {
      headers: {
        "Content-type": "application/json",
        "trakt-api-key":
          "d56205660f8aec540a91eec775156734f9b6c192890babc46c0efa9d95d297fc",
        "trakt-api-version": "2"
      }
    })
      .then(
        response => response.json(),
        error => console.log("An error occurred.", error)
      )
      .then(shows => {
        dispatch(setShows(shows));
      });
  };
};

export const fetchShowPoster = showId => {
  return dispatch => {
    let imgURL = "http://img.omdbapi.com/?apikey=6f97ef4f&i=" + showId;
    dispatch(setPosterForShow(imgURL));
  };
};

export const fetchShowsWithPosters = () => {
  return (dispatch, getState) => {
    //dispatch(requestShowsAndPosters())

    return dispatch(fetchShows()).then(() => {
      getState().shows.map(show => {
        let showId = show.show.ids.imdb;
        dispatch(fetchShowPoster(showId));
      });
    });
  };
};
