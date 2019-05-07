import React from "react";
import { render, cleanup } from "react-testing-library";
import ChatRoom from './ChatRoom';
import { ChatStoreContext } from '../../providers';
import 'jest-styled-components'

afterEach(cleanup)
describe('<ChatRoom />', () => {
  test('should render ChatRoom with provider and with props', () => {
    const { asFragment } = render(
      <ChatStoreContext.Provider value={{ state: {
        user: 'romulo', room: 'default', allUsers: [],
      }}}>
        <ChatRoom />
      </ChatStoreContext.Provider>
    );
    expect(asFragment()).toMatchSnapshot();
  })

  test('should render ChatRoom with provider and without props', () => {
    const { asFragment } = render(
      <ChatStoreContext.Provider value={{ state: {}}}>
        <ChatRoom />
      </ChatStoreContext.Provider>
    );
    expect(asFragment()).toMatchSnapshot();
  })

  test('should render ChatRoom with provider and id', () => {
    const { asFragment } = render(
      <ChatStoreContext.Provider value={{ state: {}}}>
        <ChatRoom match={{ params: { id: 'teste' }}} />
      </ChatStoreContext.Provider>
    );
    expect(asFragment()).toMatchSnapshot();
  })

  test('should render ChatRoom with provider and with failed login', () => {
    const { asFragment } = render(
      <ChatStoreContext.Provider value={{ state: { failedLogin: 'Usuário já existe' }}}>
        <ChatRoom />
      </ChatStoreContext.Provider>
    );
    expect(asFragment()).toMatchSnapshot();
  })
});
