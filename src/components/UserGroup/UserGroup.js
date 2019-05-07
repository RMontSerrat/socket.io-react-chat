import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const UserGroupContainer = styled.div`
  border-radius: ${props => props.theme.borderRadius};
  background: ${props => props.theme.colorWhite};
  padding: ${props => props.theme.padding};
  color: ${props => props.theme.colorPrimary};
`
const Title = styled.h2`
  font-family: ${props => props.theme.fontFamily};
  margin: 0;
  padding-bottom: 10px;
`
const UserGroup = ({ children }) => (
  <UserGroupContainer>
    <Title>Usuários</Title>
    {children}
  </UserGroupContainer>
)

UserGroup.propTypes = {
  children: PropTypes.node,
}

export default UserGroup;