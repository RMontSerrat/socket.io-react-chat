import React, { createContext, useReducer } from 'react';

export const SUCCESS_LOGIN = 'successLogin';
export const FAILED_LOGIN = 'failedLogin';
export const DISCONNECT_USER = 'disconnectUser';
export const CREATE_ROOM = 'createRoom';
export const NEW_MESSAGE = 'newMessage';
export const LOAD_USERS = 'loadUsers';
export const LOAD_MESSAGES = 'loadMessages';

const initialState = {
  messages: [],
  allUsers: [],
  user: null,
  failedLogin: false,
  room: null,
  successLogin: false,
}

export const ChatStoreContext = createContext(initialState);

const reducer = (state, action) => {
  switch (action.type) {
    case SUCCESS_LOGIN:
      return {
        ...state,
        user: action.user,
        successLogin: true,
        failedLogin: false,
      };
    case FAILED_LOGIN:
      return {
        ...state,
        failedLogin: action.message,
      };
    case DISCONNECT_USER:
      return {
        ...state,
        allUsers: state.allUsers.filter(user => user !== action.user),
      };
    case CREATE_ROOM:
      return {
        ...state,
        room: action.room,
      };
    case LOAD_USERS:
      return {
        ...state,
        allUsers: action.users,
      };
    case LOAD_MESSAGES:
      return {
        ...state,
        messages: action.messages,
      };
    case NEW_MESSAGE:
      return {
        ...state,
        messages: state.messages.concat(action.message),
      };
    default:
      return state;
  }
}

const ChatStoreProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <ChatStoreContext.Provider value={{state, dispatch}}>
      {children}
    </ChatStoreContext.Provider>
  )
}

export default ChatStoreProvider;