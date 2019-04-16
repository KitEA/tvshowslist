import tvShowsListApp from "../reducers/reducers";
import * as types from "../actions/ActionTypes";

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

describe("tvShowsListApp reducer", () => {
  it("should handle SET_SHOWS", () => {
    expect(
      tvShowsListApp([], {
        type: types.SET_SHOWS,
        shows
      }).shows
    ).toEqual(shows);
  });
});
