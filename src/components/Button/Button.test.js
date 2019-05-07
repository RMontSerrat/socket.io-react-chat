import React from "react";
import { render, cleanup } from "react-testing-library";
import Button from "./Button";
import 'jest-styled-components'

afterEach(cleanup);
describe('<Button />', () => {
  it("should render", () => {
    const { asFragment } = render(
      <Button>Click here</Button>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it("should render a submit button", () => {
    const { asFragment } = render(
      <Button type="submit">Click here</Button>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});