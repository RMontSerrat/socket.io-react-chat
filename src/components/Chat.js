import React from 'react';
import styled from 'styled-components';
import MessageGroup from './MessageGroup';
import Message from './Message';
import MessageBar from './MessageBar';

const InputContainer = styled.div`
  padding-top: 15px;
`

const Chat = ({ onSubmit, data }) =>
  <div>
    <MessageGroup>
      {data.map(item => <Message {...item} /> )}
    </MessageGroup>
    <InputContainer>
      <MessageBar onSubmit={onSubmit} />
    </InputContainer>
  </div>


export default Chat;