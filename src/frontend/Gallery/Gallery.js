import React from 'react';
import './Gallery.css';
import Film from './Film/Film';




export default class Gallery extends React.Component {
    constructor() {
      super();
      this.state = { films: [] }; //state is an empty array as the data has to be pulled from the backend first
    }
  
    componentDidMount() {
      fetch('/rest/films') //Pulls the data string from the backend situated at rest/films
        .then(res => res.json()) //Converts the data string to a json format so it can be rendered below
        .then(films => this.setState({ films }));
        //once the data is pulled the state is changed and the data fed into the render component below
    }
  

  //This pulls the data for each film using .map()
  render() {

    return (
      <div className="filmContainer"> {

          this.state.films.map(film => {
              return (
               <Film
                  key={film.id}
                  title={film.title}
                  rating={film.rating}
                  id={film.id} />
          );
        })
      }  
      </div>
    );
  }
}



