import React from "react";
import renderer from "react-test-renderer";
import { shallow } from "enzyme";
import SearchBar from "../../components/SearchBar";

describe("SearchBar", () => {
  it("matches the snapshot", () => {
    const tree = renderer
      .create(<SearchBar searchBarValue={""} searchByColumn={() => {}} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  it("should execute searchByColumn on value change", () => {
    const searchByColumn = jest.fn();
    const wrapper = shallow(<SearchBar searchBarValue="" searchByColumn={searchByColumn} />);
    expect(wrapper.find(".search-input").simulate("change", { target: { value: "Game" } }));
    expect(wrapper.find(".search-input").simulate("keydown", { key: "Enter" }));
    expect(searchByColumn).toHaveBeenCalledTimes(1);
  })
});
