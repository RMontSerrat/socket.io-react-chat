import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html, body, #root {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
  }

  html, body {
    font-family: ${props => props.theme.fontFamily};
  }
`
export default GlobalStyle;