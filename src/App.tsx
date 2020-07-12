import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Display} from "./component/Display";
import {ButtonPanel} from "./component/ButtonPanel";

function App() {
  return (
    <div className="App">
      <Display/>
      <ButtonPanel/>
    </div>
  );
}

export default App;
