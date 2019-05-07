import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import MessageGroup from '../MessageGroup';
import MessageBar from '../MessageBar';

const MessageBarContainer = styled.div`
  padding-top: 15px;
`
const ChatContainer = styled.div`
  display: flex;
  flex-direction: column;
`
const StyledMessageGroup = styled(MessageGroup)`
  overflow-x: auto;
  height: 100%;
`

const Chat = ({ onSubmit, children }) =>
  <ChatContainer>
    <StyledMessageGroup>
      {children}
    </StyledMessageGroup>
    <MessageBarContainer>
      <MessageBar onSubmit={onSubmit} />
    </MessageBarContainer>
  </ChatContainer>

Chat.propTypes = {
  onSubmit: PropTypes.func,
  children: PropTypes.node,
}

export default Chat;