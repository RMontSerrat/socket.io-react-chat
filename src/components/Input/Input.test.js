import React from "react";
import { render, cleanup } from "react-testing-library";
import Input from './Input';

afterEach(cleanup);
describe('<Input />', () => {
  it("should render", () => {
    const { asFragment } = render(
      <Input value="romulo" />
    );
    expect(asFragment()).toMatchSnapshot();
  });
});