import React from "react";
import { render, cleanup, fireEvent } from "react-testing-library";
import MessageBar from "./MessageBar";

afterEach(cleanup);
describe('<MessageBar />', () => {
  it("should render", () => {
    const { asFragment } = render(
      <MessageBar />
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it("should render with onSubmit", () => {
    const onSubmit = jest.fn();
    const { asFragment, getByTestId } = render(
      <MessageBar onSubmit={onSubmit} />
    );
    const input = getByTestId('messageBarInput');
    const message = 'oi pessoal';
    fireEvent.change(input, { target: { value: message }});
    const form = getByTestId('messageBarSubmit');
    fireEvent.submit(form);
    expect(onSubmit).toHaveBeenCalled();
    expect(onSubmit).toHaveBeenCalledWith(message);
    expect(asFragment()).toMatchSnapshot();
  });
});