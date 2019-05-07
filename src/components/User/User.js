import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import UserIcon from '../../icons/User';

const UserContainer = styled.div`
  padding: 5px 0;
  color: ${props => props.theme.color.primary};
  font-family: ${props => props.theme.font.primary};
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

User.propTypes = {
  children: PropTypes.node,
}

export default User;