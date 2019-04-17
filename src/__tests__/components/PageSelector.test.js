import React from "react";
import renderer from "react-test-renderer";
import PageSelector from "../../components/PageSelector";

describe("PageSelector", () => {
  it("matches the snapshot", () => {
    const tree = renderer
      .create(<PageSelector previousPage={() => {}} nextPage={() => {}} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
