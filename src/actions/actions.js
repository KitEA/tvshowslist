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

export const setPosterForShow = postersForShows => {
  return {
    type: SET_POSTER_FOR_SHOW,
    postersForShows
  };
};

// async actions

export const fetchShows = () => {
  return (dispatch, getState) => {
    const page = getState().currentPage;
    console.log(page);
    console.log(`https://api.trakt.tv/shows/popular/?page=${page}&limit=3`);
    return fetch(`https://api.trakt.tv/shows/popular/?page=${page}&limit=3`, {
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

export const fetchShowsWithPosters = () => {
  return (dispatch, getState) => {
    return dispatch(fetchShows()).then(() => {
      let postersForShows = [];
      getState().shows.map(show => {
        let showId = show.ids.imdb;
        let imgURL = "http://img.omdbapi.com/?apikey=6f97ef4f&i=" + showId;
        postersForShows = [...postersForShows, imgURL];
      });
      console.log(postersForShows);
      dispatch(setPosterForShow(postersForShows));
    });
  };
};
