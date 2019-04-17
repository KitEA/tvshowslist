import React from "react";
import renderer from "react-test-renderer";
import ShowsTable from "../../components/ShowsTable";
import { shallow } from "enzyme";

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
  },
  {
    title: "The Walking Dead",
    year: 2010,
    id: "tt1520211",
    poster: "http://img.omdbapi.com/?apikey=6f97ef4f&i=tt1520211"
  }
];

function setup() {
  const props = {
    searchResults: undefined
    //addTodo: jest.fn()
  };

  const enzymeWrapper = shallow(<ShowsTable {...props} />);

  return {
    props,
    enzymeWrapper
  };
}

describe("ShowsTable component", () => {
  it("matches the snapshot", () => {
    const tree = renderer
      .create(
        <ShowsTable
          shows={shows}
          currentPage={1}
          searchResults={[]}
          sortByHeader={() => {}}
        />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  it("should map through shows if searchResults is 0 length or doesn't exist", () => {});
});
