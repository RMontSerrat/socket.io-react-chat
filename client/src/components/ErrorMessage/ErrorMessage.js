import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import IconExclamation from '../../icons/Exclamation';

const Message = styled.div`
  display: flex;
  align-items: center;
  font-size: 15px;
  padding: 10px 0;
  color: ${props => props.theme.colorWhite};
  svg {
    width: 20px;
    height: 20px;
    path {
      fill: ${props => props.theme.colorRed};
    }
  }
`
const Text = styled.span`
  padding-left: 10px;
`

const ErrorMessage = ({ children }) => (
  <Message>
    <IconExclamation />
    <Text>{children}</Text>
  </Message>
);

ErrorMessage.propTypes = {
  children: PropTypes.node,
}

export default ErrorMessage;
