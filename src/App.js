import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import styled, { ThemeProvider } from 'styled-components';
import { ChatStoreProvider } from './providers';
import ChatRoom from './routes/chatRoom';
import { theme, GlobalStyle } from '../src/style';

const StyledApp = styled.div`
  background-color: ${props => props.theme.colorPrimary};
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
