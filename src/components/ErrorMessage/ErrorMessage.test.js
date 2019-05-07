import React from "react";
import { render, cleanup } from "react-testing-library";
import ErrorMessage from './ErrorMessage';
import 'jest-styled-components'

afterEach(cleanup);
describe('<ErrorMessage />', () => {
  it("should render", () => {
    const { asFragment } = render(
      <ErrorMessage>Este usuário já existe</ErrorMessage>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});