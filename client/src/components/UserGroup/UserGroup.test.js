import React from "react";
import { render, cleanup } from "react-testing-library";
import UserGroup from "./UserGroup";
import User from '../User';
import 'jest-styled-components'

afterEach(cleanup);
describe('<UserGroup />', () => {
  it("should render", () => {
    const { asFragment } = render(
      <UserGroup>
        <User>Romulo</User>
      </UserGroup>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});