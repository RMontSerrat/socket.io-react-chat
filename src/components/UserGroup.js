import React from 'react';
import styled from 'styled-components';

const UserGroupContainer = styled.div`
  border-radius: ${props => props.theme.borderRadius};
  background: ${props => props.theme.colorWhite};
  padding: 15px;
  color: ${props => props.theme.colorPrimary};
`
const Title = styled.h2`
  font-family: ${props => props.theme.fontFamily};
`
const UserGroup = ({ children }) => (
  <UserGroupContainer>
    <Title>Usuários</Title>
    {children}
  </UserGroupContainer>
)
export default UserGroup;