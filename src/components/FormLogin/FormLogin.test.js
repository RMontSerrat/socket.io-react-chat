import React from "react";
import { render, cleanup, fireEvent } from "react-testing-library";
import FormLogin from "./FormLogin";
import 'jest-styled-components'

afterEach(cleanup);
describe('<FormLogin />', () => {
  it("should render", () => {
    const { asFragment } = render(
      <FormLogin />
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it("should render with errorMessage", () => {
    const { asFragment } = render(
      <FormLogin errorMessage="Este usuário já existe" />
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it("should render with onSubmit", () => {
    const onSubmit = jest.fn();
    const { asFragment, getByTestId } = render(
      <FormLogin onSubmit={onSubmit} />
    );
    const input = getByTestId('formLoginInput');
    fireEvent.change(input, { target: { value: 'romulo' }});
    const form = getByTestId('formLoginSubmit');
    fireEvent.submit(form);
    expect(onSubmit).toHaveBeenCalled();
    expect(onSubmit).toHaveBeenCalledWith('romulo');
    expect(asFragment()).toMatchSnapshot();
  });

});