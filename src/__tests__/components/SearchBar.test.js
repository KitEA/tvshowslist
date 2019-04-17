import React from "react";
import renderer from "react-test-renderer";
import SearchBar from "../../components/SearchBar";

describe("SearchBar", () => {
  it("matches the snapshot", () => {
    const tree = renderer
      .create(<SearchBar searchBarValue={""} searchByColumn={() => {}} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
