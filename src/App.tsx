import React from 'react';
import logo from './logo.svg';
import MainMenu from './components/mainMenu/MainMenu';
import Tools from './components/tools/Tools';
import Bord from './components/bord/Bord';
import GlobalStyles from './styles/global'

import styled from 'styled-components';
const SCApp = styled.div`
  margin: 0;
  display: flex;
  height: 100vh;
`

function App() {
  return (
    <SCApp>
      <MainMenu/>
      <Tools/>
      <Bord />
      <GlobalStyles/>
    </SCApp>
  );
}

export default App;
