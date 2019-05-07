import React from "react";
import { render, cleanup } from "react-testing-library";
import User from "./User";

afterEach(cleanup);
describe('<User />', () => {
  it("should render", () => {
    const { asFragment } = render(
      <User>Romulo</User>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});