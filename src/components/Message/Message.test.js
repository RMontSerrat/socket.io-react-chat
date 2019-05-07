import React from "react";
import { render, cleanup } from "react-testing-library";
import Message from './Message';
import 'jest-styled-components'

afterEach(cleanup);
describe('<Message />', () => {
  it("should render with userName", () => {
    const { asFragment } = render(
      <Message date={new Date('2019-01-01')} userName="Romulo">Fala galera</Message>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it("should render with system type", () => {
    const { asFragment } = render(
      <Message date={new Date('2019-01-01')} system>Romulo entrou na sala</Message>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});