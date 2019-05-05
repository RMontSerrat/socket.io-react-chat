import React from 'react';
import styled from 'styled-components';
import MessageGroup from './MessageGroup';
import Message from './Message';
import MessageBar from './MessageBar';

const Title = styled.h1`
  font-family: ${props => props.theme.fontFamily};
  font-size: 30px;
  color: ${props => props.theme.colorWhite};
  grid-area: title;
`
const MessageBarContainer = styled.div`
  padding-top: 15px;
  grid-area: input-container;
`
const ChatContainer = styled.div`
  display: grid;
  grid-template-areas: 'title' 'message-group' 'input-container';
  grid-template-rows: auto 60% auto;
`
const StyledMessageGroup = styled(MessageGroup)`
  overflow-x: auto;
  grid-area: message-group;
`

const Chat = ({ onSubmit, data, name }) =>
  <ChatContainer>
    <Title>Chat {name}</Title>
    <StyledMessageGroup>
      {data.map(({ children, ...item }) => <Message {...item}>{children}</Message> )}
    </StyledMessageGroup>
    <MessageBarContainer>
      <MessageBar onSubmit={onSubmit} />
    </MessageBarContainer>
  </ChatContainer>


export default Chat;