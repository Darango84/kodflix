import React from 'react';
import './App.css';
import Gallery from './Gallery/Gallery';
import FilmDetails from './Gallery/FilmDetails/FilmDetails';
import {
  BrowserRouter,
  Route,
  } from 'react-router-dom';


function App() {
  return (
    <div>
      <BrowserRouter>
        <div>
          <h1>Kodflix</h1>
          <Route path="/" exact component={Gallery} />
          <Route path="/:details" exact component={FilmDetails} />
        </div>

        <br/>>
      <div>
        <p className="footer">An app by Dan Arango ™</p>
      </div>
    </BrowserRouter>
</div>
  );
}

export default App;


