import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import fetchMock from "fetch-mock";
import * as types from "../../actions/ActionTypes";
import * as actions from "../../actions/actions";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

const shows = [
  {
    title: "Game of Thrones",
    year: 2011,
    id: "tt0944947",
    poster: "http://img.omdbapi.com/?apikey=6f97ef4f&i=tt0944947"
  },
  {
    title: "Breaking Bad",
    year: 2008,
    id: "tt0903747",
    poster: "http://img.omdbapi.com/?apikey=6f97ef4f&i=tt0903747"
  }
];

const mockShows = [
  {
    title: "Game of Thrones",
    year: 2011,
    ids: {
      trakt: 1390,
      slug: "game-of-thrones",
      tvdb: 121361,
      imdb: "tt0944947",
      tmdb: 1399,
      tvrage: 24493
    }
  },
  {
    title: "Breaking Bad",
    year: 2008,
    ids: {
      trakt: 1388,
      slug: "breaking-bad",
      tvdb: 81189,
      imdb: "tt0903747",
      tmdb: 1396,
      tvrage: 18164
    }
  }
];

const stateBefore = (currentPage = 1, sort = "desc") => {
  return {
    currentPage: currentPage,
    shows: [],
    sort: sort,
    search: "",
    searchResults: []
  };
};

const sortOrder = "desc";

describe("actions", () => {
  it("should create an action to sort shows", () => {
    const sortKey = "title";
    const expectedAction = {
      type: types.SORT_SHOWS,
      shows,
      sortKey,
      sortOrder
    };
    expect(actions.sortShows(shows, sortKey, sortOrder)).toEqual(
      expectedAction
    );
  });
  it("should create an action to change sort order", () => {
    const expectedAction = {
      type: types.SET_SORT_ORDER,
      sortOrder
    };
    expect(actions.setSortOrder(sortOrder)).toEqual(expectedAction);
  });
  it("should create an action to change search value", () => {
    const input = "Game";
    const expectedAction = {
      type: types.CHANGE_SEARCH_VALUE,
      input
    };
    expect(actions.changeSearchValue(input)).toEqual(expectedAction);
  });
  it("should create an action to search by column", () => {
    const searchValue = "Game";
    const expectedAction = {
      type: types.SEARCH_BY_COLUMN,
      shows,
      searchValue
    };
    expect(actions.searchByColumn(shows, searchValue)).toEqual(expectedAction);
  });
  it("should create an action to move to previous page", () => {
    const expectedAction = {
      type: types.PREVIOUS_PAGE
    };
    expect(actions.previousPage()).toEqual(expectedAction);
  });
  it("should create an action to move to next page", () => {
    const expectedAction = {
      type: types.NEXT_PAGE
    };
    expect(actions.nextPage()).toEqual(expectedAction);
  });
  it("should create an action to set shows", () => {
    const expectedAction = {
      type: types.SET_SHOWS,
      shows
    };
    expect(actions.setShows(shows)).toEqual(expectedAction);
  });
});

describe("async actions", () => {
  afterEach(() => {
    fetchMock.restore();
  });

  it("fetches shows", async () => {
    fetchMock.getOnce(`https://api.trakt.tv/shows/popular/?page=${1}&limit=3`, {
      body: mockShows,
      headers: {
        "content-type": "application/json"
      }
    });

    const store = mockStore(stateBefore());

    return store.dispatch(actions.fetchShows()).then(() => {
      expect(store.getActions()).toEqual([{
        type: types.SET_SHOWS,
        shows
      }]);
    });
  });
});
