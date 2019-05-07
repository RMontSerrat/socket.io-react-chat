import styled from 'styled-components';

const SvgIcon = styled.svg`
  width: ${props => props.theme.icon.size};
  height: ${props => props.theme.icon.size};
  path {
    fill: ${props => props.theme.color.black};
  }
`
export default SvgIcon;