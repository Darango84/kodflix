import React from 'react';
import inceptionCover from './inceptionCover.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Welcome to Kodflix</h1>
      <img className="inception" src={inceptionCover} alt="This is the cover for the Inception film 2010"/>
    </div>
  );
}

export default App;
