import styled from 'styled-components';

const Input = styled.input`
  background-color: ${props => props.theme.colorWhite};
  padding: 10px;
  width: calc(100% - 20px);
  color: ${props => props.theme.colorPrimary};
  border-radius: ${props => props.theme.borderRadius};
  font-family: ${props => props.theme.fontFamily};
  border: 0;
  outline: none;
`

export default Input;