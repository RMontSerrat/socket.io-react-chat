import styled from 'styled-components';

const MessageGroup = styled.div`
  border-radius: ${props => props.theme.borderRadius};
  background: ${props => props.theme.colorWhite};
  padding: ${props => props.theme.padding};
  color: ${props => props.theme.colorPrimary};
  > div {
    margin: 10px 0;
  }
`
export default MessageGroup;