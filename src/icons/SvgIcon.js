import styled from 'styled-components';

const SvgIcon = styled.svg`
  width: ${props => props.theme.sizeIcon}px;
  height: ${props => props.theme.sizeIcon}px;
  path {
    fill: ${props => props.theme.colorBlack};
  }
`
export default SvgIcon;