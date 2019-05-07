import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components';
import { ChatStoreProvider } from './providers';
import ChatRoom from './routes/chatRoom';
import theme from './config/theme';

const GlobalStyle = createGlobalStyle`
  html, body, #root {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
  }

  html, body {
    font-family: ${props => props.theme.font.primary};
  }
`
const StyledApp = styled.div`
  background-color: ${props => props.theme.color.primary};
  height: 100%;
`;

const App = () => (
  <Router>
    <ChatStoreProvider>
      <ThemeProvider theme={theme}>
        <StyledApp>
          <Route path="/" exact component={ChatRoom} />
          <Route path="/:id" component={ChatRoom} />
          <GlobalStyle />
        </StyledApp>
      </ThemeProvider>
    </ChatStoreProvider>
  </Router>
)

export default App;
