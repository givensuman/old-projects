import React, { useState, useEffect } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { token } from '../spotify.js';

import Login from './Login.jsx';
import Profile from './Profile.jsx';
import Playlist from './Playlist.jsx';
import History from './History.jsx';
import Error from './Error.jsx';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background-color: #1E1D1D;
    color: #F4F4F4;
    font-family: 'Poppins', sans-serif;
  }
  .button {
    height: 50px;
    width: 200px;
    display: flex;
    margin: 3% 0;
    justify-content: center;
    text-decoration: none;
    align-items: center;
    border-radius: 30px;
    font-size: 1.1rem;
    font-weight: 600;
    color: #1E1D1D;
    background-color: #F4F4F4;
    cursor: pointer;
    transition-duration: 0.25s;  
    &:hover {
        transform: scale(1.1);
        background: #1E1D1D;
        color: #F4F4F4;
        box-shadow: none;
        border: none;
    }
`;
const AppContainer = styled.div`
  height: 100%;
  min-height: 100vh;
  margin: 0;
  z-index: -100;
`;

const App = () => {
  const [accessToken, setAccessToken] = useState("");
  const [errorState, setErrorState] = useState(false);

  useEffect(() => {
    setAccessToken(token);
  }, []);

  return (
    <Router>
      <AppContainer>
        <GlobalStyle />
          <Switch>
            <Route path='/playlist' render={() => accessToken ? <Playlist token={accessToken}/> : <Login />} />
            <Route path='/history' render={() => accessToken ? <History token={accessToken}/> : <Login />} />
            <Route path='/' render={() => errorState ? <Error setErrorState={setErrorState} setAccessToken={setAccessToken}/> : accessToken ? <Profile token={accessToken} setErrorState={setErrorState}/> : <Login />} />
          </Switch>
      </AppContainer>
    </Router>
  );
};

export default App;
