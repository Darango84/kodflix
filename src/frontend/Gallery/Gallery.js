import React, { Component } from 'react';
import './Gallery.css';
import Film from './Film/Film';


//This component pulls the data for each film from GalleryData using .map()

export default class gallery extends Component {
    constructor() {
      super();
      this.state = { Film: [] }
    }
  
    componentDidMount() {
      fetch('/rest/films')
        .then(res => res.json())
        .then(Film => this.setState({Film : Film}, () => console.log('Films fetched...', Film)));
    }
  
  render() {
    return (
      <div className="filmContainer">
          {
          this.state.Film.map(film => (
              <Film
                  key={film.id}
                  image={film.image}
                  title={film.title}
                  rating={film.rating}
                  id={film.id} />
          ))
          }
      </div>
    );
  }
}



