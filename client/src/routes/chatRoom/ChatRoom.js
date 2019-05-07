import React, { useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import { chatService } from '../../services';
import { 
  ChatStoreContext,
  SUCCESS_LOGIN,
  FAILED_LOGIN,
  DISCONNECT_USER,
  CREATE_ROOM,
  NEW_MESSAGE,
  LOAD_MESSAGES,
  LOAD_USERS,
} from '../../providers';
import ChatRoomContainer from './components/ChatRoomContainer';
import FormLogin from '../../components/FormLogin';

const ChatRoom = ({ match: { params: { id } = {} } = {} }) => {
  const {
    state: {
      allUsers,
      user,
      room,
      messages,
      failedLogin
    }, 
    dispatch
  } = useContext(ChatStoreContext);

  const roomName = id || 'Default';

  const onSendMessage = message => {
    dispatch({ type: NEW_MESSAGE, message });
  }

  const onCreateRoom = roomName => {
    dispatch({ type: CREATE_ROOM, room: roomName });
  }

  const onSuccessLogin = user => {
    dispatch({ type: SUCCESS_LOGIN, user });
  }

  const onFailedLogin = message => {
    dispatch({ type: FAILED_LOGIN, message });
  }

  const onDisconnect = user => {
    dispatch({ type: DISCONNECT_USER, user });
  }

  const loadUsers = users => {
    dispatch({ type: LOAD_USERS, users });
  }

  const loadMessages = messages => {
    dispatch({ type: LOAD_MESSAGES, messages });
  }

  const loadServices = () => {
    chatService.onCreateRoom(onCreateRoom);
    chatService.onLoadUsers(loadUsers);
    chatService.onSendMessage(onSendMessage);
    chatService.onLoadMessages(loadMessages);
    chatService.onDisconnectUser(onDisconnect);
    chatService.onSuccessLogin(onSuccessLogin);
    chatService.onFailedLogin(onFailedLogin);
  }

  useEffect(() => {
    loadServices();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handleSubmitChat = message => {
    chatService.sendMessage(message);
  }

  const handleSubmitLogin = value => {
    chatService.createRoom(roomName);
    chatService.tryLogin(value);
  }

  return (
    <>
      {user && room ?
        <ChatRoomContainer
          onSubmit={handleSubmitChat}
          name={roomName}
          users={allUsers}
          messages={messages}
        /> :
        <FormLogin onSubmit={handleSubmitLogin} errorMessage={failedLogin} />
      }
    </>
  );
}

ChatRoom.propTypes = {
  match: PropTypes.object,
}

export default ChatRoom;