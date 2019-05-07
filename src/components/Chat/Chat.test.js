import React from "react";
import { render, cleanup, fireEvent } from "react-testing-library";
import Chat from "./Chat";
import Message from '../Message';
import 'jest-styled-components'

afterEach(cleanup);
describe('<Chat />', () => {
  it("should render", () => {
    const { asFragment } = render(
      <Chat>
        <Message date={new Date('2019-01-01')} userName="Romulo">boa noite.</Message>
      </Chat>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it("should render with onSubmit", () => {
    const onSubmit = jest.fn();
    const { getByTestId } = render(
      <Chat onSubmit={onSubmit}>
        <Message date={new Date('2019-01-01')} userName="Romulo">boa noite.</Message>
      </Chat>
    );
    const form = getByTestId('messageBarSubmit');
    fireEvent.submit(form);
    expect(onSubmit).toHaveBeenCalled();
  });

});