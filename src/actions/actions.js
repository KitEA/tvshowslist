/*export const SORT_BY_COLUMN = "SORT_BY_COLUM";
export const SEARCH_BY_COLUMN = "SEARCH_BY_COLUMN";

export const sortByColumn = key => {
  return {
    type: SORT_BY_COLUMN,
    key
  };
};
*/

/*export const REQUEST_PAGE = "REQUEST_PAGE";
export const RECEIVE_PAGE = "RECEIVE_PAGE";

export const requestPage = (page) => ({
  type: REQUEST_PAGE,
  page
})

export const receivePage = (page, results) => ({
  type: RECEIVE_PAGE,
  page, 
  results
}) 
*/

export const PREVIOUS_PAGE = 'PREVIOUS_PAGE';
export const NEXT_PAGE = 'NEXT_PAGE';

export const SET_SHOWS = "SET_SHOWS";
export const SET_POSTER_FOR_SHOW = "SET_POSTER_FOR_SHOW";

// pagination actions

export const previousPage = () => { 
  return { 
    type: PREVIOUS_PAGE
  }
}

export const nextPage = () => { 
  return { 
    type: NEXT_PAGE
  }
}

// sync-async actions

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

// async actions

export const fetchShows = (page) => {
  return dispatch => {
    return fetch(`https://api.trakt.tv/shows/popular/?page=1&limit=5`, {
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

export const fetchShowsWithPosters = (page) => {
  return (dispatch, getState) => {
    return dispatch(fetchShows(page)).then(() => {
      getState().shows.map(show => {
        let showId = show.ids.imdb;
        dispatch(fetchShowPoster(showId));
      });
    });
  };
};
