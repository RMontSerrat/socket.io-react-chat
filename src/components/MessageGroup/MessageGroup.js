import styled from 'styled-components';

const MessageGroup = styled.div`
  border-radius: ${props => props.theme.borderRadius};
  background: ${props => props.theme.color.white};
  padding: ${props => props.theme.padding};
  color: ${props => props.theme.color.primary};
  > div {
    margin: 10px 0;
  }
`
export default MessageGroup;