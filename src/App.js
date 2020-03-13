import React from 'react';
import './App.css';
import Gallery from './Gallery/Gallery';
import FilmDetailsMessage from './Gallery/FilmDetails/FilmDetails';
import Menu from './Menu/Menu'
import {
  BrowserRouter,
  Route,
  } from 'react-router-dom';


function App() {
  return (
    <div>
      <BrowserRouter>
        
          <Menu />
          <Route path="/" exact component={Gallery} />
          <Route path="/:details" exact component={FilmDetailsMessage} />

        <br/>>
      <div>
        <p className="footer">An app by Dan Arango ™</p>
      </div>
    </BrowserRouter>
</div>
  );
}

export default App;


