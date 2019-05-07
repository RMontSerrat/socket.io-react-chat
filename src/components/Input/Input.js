import styled from 'styled-components';

const Input = styled.input`
  background-color: ${props => props.theme.color.white};
  padding: 15px 10px;
  width: calc(100% - 20px);
  color: ${props => props.theme.color.primary};
  border-radius: ${props => props.theme.borderRadius};
  font-family: ${props => props.theme.font.primary};
  border: 0;
  outline: none;
`

export default Input;