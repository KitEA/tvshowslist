import {
  SORT_SHOWS,
  SET_SORT_ORDER,
  CHANGE_SEARCH_VALUE,
  PREVIOUS_PAGE,
  NEXT_PAGE,
  SET_SHOWS,
  START_END_SEARCH,
  RESET_PAGE,
  REQUEST_SHOWS
} from "./ActionTypes";
import noposter from "../img/noposter.jpg";

// search actions creators

export const changeSearchValue = input => {
  return {
    type: CHANGE_SEARCH_VALUE,
    input
  };
};

export const startEndSearch = () => {
  return {
    type: START_END_SEARCH
  }
}

// sort actions creators

export const sortShows = (shows, sortKey, sortOrder) => {
  return {
    type: SORT_SHOWS,
    shows,
    sortKey,
    sortOrder
  };
};

export const setSortOrder = sortOrder => {
  return {
    type: SET_SORT_ORDER,
    sortOrder
  };
};

// pagination actions creators

export const resetPage = () => {
  return {
    type: RESET_PAGE
  }
}

export const previousPage = () => {
  return {
    type: PREVIOUS_PAGE
  };
};

export const nextPage = () => {
  return {
    type: NEXT_PAGE
  };
};

// sync-async actions creators

export const requestShows = () => {
  return {
    type: REQUEST_SHOWS
  }
}

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
    const search = getState().search;
    let params = new URLSearchParams();
    params.append("page", page);
    params.append("limit", 3);
    if (getState().searchStatus === true) {
      params.append("query", search);
    } else {
      params.append("query", "");
    }
    let url = new URL(`https://api.trakt.tv/search/show?${params.toString()}`);
    dispatch(requestShows());
    return fetch(url, {
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
          let unwrapAppSpecificFields = ({
            show: {
              ids: { imdb },
              title,
              year
            }
          }) => ({
            id: imdb,
            title,
            year
          });
          let pickedShow = unwrapAppSpecificFields(show);
          let showId = pickedShow.id;
          const apikey = new URLSearchParams("apikey=6f97ef4f&i=");
          let imgURL = () => {
            let http = new XMLHttpRequest();
            const URL = `https://img.omdbapi.com/?${apikey.toString()}` + showId;
            http.open("GET", URL, false);
            http.send();

            if (http.status !== 404) {
              return URL;
            } else {
              return noposter;
            }
          };
          pickedShow.poster = imgURL();
          return pickedShow;
        });
        dispatch(setShows(showsWithPosters));
      });
  };
};
