import React from "react";
import renderer from "react-test-renderer";
import { shallow } from "enzyme";
import PageSelector from "../../components/PageSelector";

describe("PageSelector", () => {
  it("matches the snapshot", () => {
    const tree = renderer
      .create(<PageSelector previousPage={() => {}} nextPage={() => {}} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  it("should execute nextPage after button clicked", () => {
    const nextPage = jest.fn();
    const wrapper = shallow(
      <PageSelector previousPage={() => {}} nextPage={nextPage} />
    );
    expect(wrapper.find(".next-page-button").simulate("click"));
    expect(nextPage).toHaveBeenCalledTimes(1);
  });
  it("should execute previousPage after button clicked", () => {
    const previousPage = jest.fn();
    const wrapper = shallow(
      <PageSelector previousPage={previousPage} nextPage={() => {}} />
    );
    expect(wrapper.find(".previous-page-button").simulate("click"));
    expect(previousPage).toHaveBeenCalledTimes(1);
  });
});
