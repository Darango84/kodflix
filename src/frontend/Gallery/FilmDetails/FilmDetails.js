import React from 'react';
import './FilmDetails.css';
import { Link, Redirect } from 'react-router-dom';

//This component creates a page where the Film details are displayed

export default class FilmDetails extends React.Component {
  constructor() {
    super();
    this.state = { film: {} };
  }

  componentDidMount() {
    fetch('/rest/films')
    .then(res => res.json())

    .then(films => {
      let filmId = this.props.match.params.filmId;
      let film = films.find(film => film.id === filmId);
      this.setState({ film });
    });
  }


  render() { //if the film isnt found, the app redirects to the Not Found page
    let film = this.state.film;  
   
    if (film) {
      return film.id ?
       <DetailsContent film={film} /> :
       <div />;
        
    } else {
      return <Redirect to='/not-found' />;
    }
  }
}

function DetailsContent({ film }) {
  return (
    <div>
      
      <h3 className="detailsTitle">{film.title}</h3>
      <h3 className="rating">{film.rating}</h3>

      <div className="detailsContainer">

        <img 
          className="filmDetailsImage" 
          src={require(`../../common/images/${film.id}.jpg`)}
          alt={film.altMessage} />
        <p className="filmSynopsys">{film.synopsys}</p>
      </div>

      <div className="linkContainer">
        <Link to="./" className="link">◀︎ Go Back</Link>
      </div>

    </div>
  )
}