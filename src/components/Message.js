import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  color: ${props => props.theme.colorPrimary};
  font-family: ${props => props.theme.fontFamily};
  padding: 5px;
  background-color: ${props => props.active ? props.theme.colorLightGreen : 'transparent'};
`

const DateContainer = styled.span`
  display: block;
  padding-right: 10px;
`
const Name = styled.strong`
  padding-right: 5px;
`

const Message = ({ children, userName = 'Servidor', date, active }) =>
  <Container active={active}>
    <DateContainer>[{new Date(date).toLocaleTimeString()}]</DateContainer>
    <Name>{userName}:</Name>
    {children}
  </Container>

export default Message;