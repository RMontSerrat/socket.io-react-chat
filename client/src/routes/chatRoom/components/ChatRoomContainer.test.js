import React from "react";
import { render, cleanup, fireEvent } from "react-testing-library";
import ChatRoomContainer from "./ChatRoomContainer";
import 'jest-styled-components'

afterEach(cleanup);
describe('<ChatRoomContainer />', () => {
  it("should render", () => {
    const { asFragment } = render(
      <ChatRoomContainer />
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it("should render with users and messages", () => {
    const users = ['romulo', 'jorge'];
    const messages = [{
      userName: 'romulo',
      msg: 'fala galera'
    }, {
      system: true,
      msg: 'Jorge entrou na sala...'
    }]

    const { asFragment } = render(
      <ChatRoomContainer users={users} messages={messages} />
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it("should render with name", () => {

    const { asFragment } = render(
      <ChatRoomContainer name="teste" />
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it("should render with onSubmit", () => {
    const onSubmit = jest.fn();
    const { getByTestId } = render(
      <ChatRoomContainer onSubmit={onSubmit} />
    );
    const message = 'oi pessoal';
    const input = getByTestId('messageBarInput');
    fireEvent.change(input, { target: { value: message }});
    const form = getByTestId('messageBarSubmit');
    fireEvent.submit(form);
    expect(onSubmit).toHaveBeenCalled();
    expect(onSubmit).toHaveBeenCalledWith(message);
  });
});