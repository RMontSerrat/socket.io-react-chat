import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  border-radius: ${props => props.theme.borderRadius};
  background: ${props => props.theme.colorWhite};
  padding: 15px;
  color: ${props => props.theme.colorPrimary};
  > div {
    margin: 10px 0;
  }
`
const MessageGroup = ({ children }) =>
  <Container>
    {children}
  </Container>

export default MessageGroup;