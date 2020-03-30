import React, {Component} from 'react';
import './App.css';
import Gallery from './Gallery/Gallery';
import FilmDetails from './Gallery/FilmDetails/FilmDetails';
import Menu from './Menu/Menu';
import NotFound from './NotFound/NotFound';
import {
  BrowserRouter,
  Route,
  } from 'react-router-dom';

 

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
        
            <Menu />
            <Route path="/" exact component={Gallery} />
            <Route path="/not-found"  exact component={NotFound} />
            <Route path="/:filmId" exact component={FilmDetails} />

          <br/>
        <div>
          <p className="footer">An app by Dan Arango ™</p>
        </div>
        
      </BrowserRouter>
  </div>
    );
  }
}

export default App;


