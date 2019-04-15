/* import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock'; */
import * as types from "../actions/ActionTypes";
import * as actions from "../actions/actions";

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
    expect(actions.sortShows(shows, sortKey, sortOrder)).toEqual(expectedAction);
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
