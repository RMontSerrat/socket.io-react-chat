import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  width: 100%;
  font-weight: bold;
  border-radius: ${props => props.theme.borderRadius};
  transition: all 0.2s ease-in 0s;
  background: ${props => props.theme.colorSecondary};
  border: 0;
  padding: 20px;
  color: ${props => props.theme.colorPrimary};
  cursor: pointer;
  outline: none;
`

const Button = ({ children, ...rest }) => {
  return (
    <StyledButton {...rest}>
      {children}
    </StyledButton>
  );
};

export default Button;
