import React from 'react';
import logo from './logo.svg';
import './App.css';
import MainMenu from './components/mainMenu/MainMenu';
import Tools from './components/tools/Tools';
import Bord from './components/bord/Bord';

function App() {
  return (
    <div className="App">
      
      <MainMenu/>
      <Tools/>
      <Bord />
    </div>
  );
}

export default App;
