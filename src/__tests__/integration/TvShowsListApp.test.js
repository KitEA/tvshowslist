import * as React from "react";
import { Provider } from "react-redux";
import { mount } from "enzyme";
import setupStore from "../../setupStore";
import fetchMock from "fetch-mock";

import App from "../../containers/App";
import ShowsTable from "../../components/ShowsTable";

describe("App integration tests", () => {
  let store;
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
  ]

  const flushAllPromises = () => new Promise(resolve => setImmediate(resolve));

  beforeEach(() => {
    store = setupStore();
  });

  afterEach(() => {
    fetchMock.restore();
  });

  it("should fetch and render list of shows", async () => {
    fetchMock.getOnce(`https://api.trakt.tv/shows/popular/?page=${1}&limit=3`, {
      body: mockShows,
      headers: {
        "content-type": "application/json"
      }
    });

    const wrapper = mount(
      <Provider store={store}>
        <App />
      </Provider>
    );

    await flushAllPromises();
    wrapper.update();

    const numberOfShowsFetched = 2;
    expect(wrapper.find(ShowsTable).prop("shows")).toHaveLength(
      numberOfShowsFetched
    );

    const numberOfPropsForEachShowObject = 4;
    const numberOfTableDataFields =
      numberOfPropsForEachShowObject * numberOfShowsFetched;
    expect(
      wrapper
        .find(ShowsTable)
        .find("table")
        .find("tbody")
        .find("td")
    ).toHaveLength(numberOfTableDataFields);
  });
});
