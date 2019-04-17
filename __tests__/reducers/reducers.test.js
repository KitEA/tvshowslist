import tvShowsListApp from "../../reducers/reducers";
import * as types from "../../actions/ActionTypes";

const stateBefore = (currentPage = 1, sort = "desc") => {
  return {
    currentPage: currentPage,
    shows: [],
    sort: sort,
    search: "",
    searchResults: []
  };
};

const shows = [
  {
    title: "Game of Thrones",
    year: 2011,
    id: "tt0944947"
  },
  {
    title: "Breaking Bad",
    year: 2008,
    id: "tt0903747"
  },
  {
    title: "The Walking Dead",
    year: 2010,
    id: "tt1520211"
  }
];

const sortedShows = [
  {
    title: "The Walking Dead",
    year: 2010,
    id: "tt1520211"
  },
  {
    title: "Game of Thrones",
    year: 2011,
    id: "tt0944947"
  },
  {
    title: "Breaking Bad",
    year: 2008,
    id: "tt0903747"
  }
];

const sortKey = "title";
const sortOrder = "desc";

describe("tvShowsListApp reducer", () => {
  it("should return unmodified state reacting to unrecognized action", () => {
    const action = { type: "dummy_action" };
    expect(tvShowsListApp(stateBefore(), action)).toEqual(stateBefore());
  });
  it("should handle SET_SHOWS", () => {
    expect(
      tvShowsListApp(stateBefore(), {
        type: types.SET_SHOWS,
        shows
      }).shows
    ).toEqual(shows);
  });
  it("should handle SORT_SHOWS", () => {
    expect(
      tvShowsListApp(stateBefore(), {
        type: types.SORT_SHOWS,
        shows,
        sortKey,
        sortOrder
      }).shows
    ).toEqual(sortedShows);
  });
  it("should handle PREVIOUS_PAGE", () => {
    expect(
      tvShowsListApp(stateBefore(2), {
        type: types.PREVIOUS_PAGE
      }).currentPage
    ).toEqual(1);
  });
  it("should handle NEXT_PAGE", () => {
    expect(
      tvShowsListApp(stateBefore(1), {
        type: types.NEXT_PAGE
      }).currentPage
    ).toEqual(2);
  });
  it("should handle SET_SORT_ORDER", () => {
    expect(
      tvShowsListApp(stateBefore("asc"), {
        type: types.SET_SORT_ORDER,
        sortOrder
      }).sort
    ).toEqual("desc");
  });
  it("should handle SEARCH_BY_COLUMN", () => {
    expect(
      tvShowsListApp(stateBefore(), {
        type: types.SEARCH_BY_COLUMN,
        shows,
        searchValue: "Game"
      }).searchResults
    ).toEqual([
      {
        title: "Game of Thrones",
        year: 2011,
        id: "tt0944947"
      }
    ]);
  });
  it("should handle CHANGE_SEARCH_VALUE", () => {
    expect(
      tvShowsListApp(stateBefore(), {
        type: types.CHANGE_SEARCH_VALUE,
        input: "G"
      }).search
    ).toEqual("G");
  });
});
