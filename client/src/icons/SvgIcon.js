import styled from 'styled-components';

const SvgIcon = styled.svg`
  width: ${props => props.theme.sizeIcon};
  height: ${props => props.theme.sizeIcon};
  path {
    fill: ${props => props.theme.colorBlack};
  }
`
export default SvgIcon;