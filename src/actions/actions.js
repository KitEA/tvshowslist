import { SORT_SHOWS, SET_SORT_ORDER, CHANGE_SEARCH_VALUE, SEARCH_BY_COLUMN, PREVIOUS_PAGE, NEXT_PAGE, SET_SHOWS } from './ActionTypes';

// search actions creators

export const changeSearchValue = input => {
  return {
    type: CHANGE_SEARCH_VALUE,
    input
  }
}

export const searchByColumn = (shows, searchValue) => {
  return {
    type: SEARCH_BY_COLUMN,
    shows,
    searchValue
  }
}

// sort actions creators

export const sortShows = (shows, sortKey, sortOrder) => {
  return {
    type: SORT_SHOWS,
    shows,
    sortKey,
    sortOrder
  }
}

export const setSortOrder = sortOrder => {
  return {
    type: SET_SORT_ORDER,
    sortOrder
  }
}

// pagination actions creators

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

// sync-async actions creators

export const setShows = shows => {
  return {
    type: SET_SHOWS,
    shows
  };
};

// async actions

export const fetchShows = () => {
  return (dispatch, getState) => {
    const page = getState().currentPage;
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
        const showsWithPosters = shows.map(show => {
          let showId = show.ids.imdb;
          let imgURL = "http://img.omdbapi.com/?apikey=6f97ef4f&i=" + showId;
          show.poster = imgURL;
          return show;
        });
        dispatch(setShows(showsWithPosters));
      });
  };
};
