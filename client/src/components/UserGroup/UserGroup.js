import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const UserGroupContainer = styled.div`
  border-radius: ${props => props.theme.borderRadius};
  background: ${props => props.theme.colorWhite};
  padding: ${props => props.theme.padding};
  color: ${props => props.theme.colorPrimary};
`

const Users = styled.div`
  display: flex;
  flex-direction: column;
  @media (max-width: 600px) {
    flex-direction: row;
    > div {
      padding-right: 10px;
    }
  }
`
const Title = styled.h2`
  margin: 0;
  padding-bottom: 10px;
`
const UserGroup = ({ children }) => (
  <UserGroupContainer>
    <Title>Usuários</Title>
    <Users>
      {children}
    </Users>
  </UserGroupContainer>
)

UserGroup.propTypes = {
  children: PropTypes.node,
}

export default UserGroup;