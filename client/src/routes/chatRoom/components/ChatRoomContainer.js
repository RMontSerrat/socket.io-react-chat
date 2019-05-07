import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import UserGroup from '../../../components/UserGroup';
import User from '../../../components/User';
import Chat from '../../../components/Chat';
import Message from '../../../components/Message';

const Title = styled.h1`
  font-family: ${props => props.theme.fontFamily};
  font-size: 30px;
  color: ${props => props.theme.colorWhite};
  grid-area: title;
  margin: 0;
  padding-bottom: ${props => props.theme.padding};
`
const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 250px auto;
  grid-gap: ${props => props.theme.padding};
  width: 100%;
  height: calc(100% - 50px);
  @media (max-width: 600px) {
    grid-template-columns: auto;
    grid-template-rows: 100px auto;
  }
`
const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: calc(100% - 30px);
  padding: ${props => props.theme.padding};
`

const ChatRoomContainer = ({ messages = [], users = [], name, onSubmit }) => (
  <Container>
    <Title>Chat {name}</Title>
    <GridContainer>
      <UserGroup>
        {users.map(name => <User key={name}>{name}</User>)}
      </UserGroup>
      <Chat onSubmit={onSubmit}>
        {messages.map(({ msg, ...item }) => <Message key={msg} {...item}>{msg}</Message>)}
      </Chat>
    </GridContainer>
  </Container>
);

ChatRoomContainer.propTypes = {
  messages: PropTypes.array,
  users: PropTypes.array,
  name: PropTypes.string,
  onSubmit: PropTypes.func,
}

export default ChatRoomContainer;