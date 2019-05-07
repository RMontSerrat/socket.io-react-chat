import React from "react";
import { render, cleanup, fireEvent } from "react-testing-library";
import MessageGroup from "./MessageGroup";
import Message from '../Message';

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