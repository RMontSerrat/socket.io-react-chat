import React from "react";
import { render, cleanup } from "react-testing-library";
import MessageGroup from "./MessageGroup";
import Message from '../Message';
import 'jest-styled-components'

afterEach(cleanup);
describe('<MessageGroup />', () => {
  it("should render", () => {
    const { asFragment } = render(
      <MessageGroup>
        <Message userName="Romulo" date={new Date('2019-01-01')}>Fala galera</Message>
      </MessageGroup>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});