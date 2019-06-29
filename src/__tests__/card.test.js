import React from "react";
import { shallow } from "enzyme";

// COMPONENT
import { Card } from '../components/card';

describe("Testing Card component", () => {
  it("should render correctly", () => {
    const wrapper = shallow(<Card />);
    expect(wrapper).toMatchSnapshot();
  });
});