import React from "react";
import { render, cleanup } from "react-testing-library";
import Input from './Input';
import 'jest-styled-components'

afterEach(cleanup);
describe('<Input />', () => {
  it("should render", () => {
    const { asFragment } = render(
      <Input value="romulo" />
    );
    expect(asFragment()).toMatchSnapshot();
  });
});