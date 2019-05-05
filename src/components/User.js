import React from 'react';
import styled from 'styled-components';
import UserIcon from '../icons/User';

const UserContainer = styled.div`
  padding: 5px 0;
  color: ${props => props.theme.colorPrimary};
  font-family: ${props => props.theme.fontFamily};
  display: flex;
  font-size: 14px;
  align-items: center;
`
const Text = styled.span`
  padding-left: 10px;
`

const User = ({ children }) => 
  <UserContainer>
    <UserIcon />
    <Text>{children}</Text>
  </UserContainer>

export default User;