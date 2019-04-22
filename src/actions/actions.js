import {
  SORT_SHOWS,
  SET_SORT_ORDER,
  CHANGE_SEARCH_VALUE,
  PREVIOUS_PAGE,
  NEXT_PAGE,
  SET_SHOWS
} from "./ActionTypes";
import noposter from "../img/noposter.jpg";

// search actions creators

export const changeSearchValue = input => {
  return {
    type: CHANGE_SEARCH_VALUE,
    input
  };
};

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
    if (typeof search === "undefined") {
      params.append("query", "");
    } else {
      params.append("query", search);
    }
    let url = new URL(`http://api.trakt.tv/search/show?${params.toString()}`);
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
            const URL = `http://img.omdbapi.com/?${apikey.toString()}` + showId;
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
