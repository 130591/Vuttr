import React from "react";
import { shallow } from "enzyme";

// COMPONENT
import { Modal } from "../src/components/modal";

describe("Testing Modal component", () => {
  it("should render correctly", () => {
    const wrapper = shallow(<Modal />);
    expect(wrapper).toMatchSnapshot();
  });
});
