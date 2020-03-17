import React from "react";
import "./FilmDetails.css";
import getFilmData from "../GalleryData/GalleryData";
import { Link, Redirect } from "react-router-dom";

//This component creates a page where the Film details are displayed

export default class FilmDetailsMessage extends React.Component {
  constructor() {
    super();
    this.state = { film: {} };
  }

  componentDidMount() {
    let filmId = this.props.match.params.filmId;
    let film = getFilmData().find(film => film.id === filmId);

    this.setState({
      film: film
    });
  }

  render() { //if the film isnt found, the app redirects to the Not Found page
      if (!this.state.film){
         return <Redirect to="/not-found" />
      }
        
    return (
      <div>
        <h3 className="detailsTitle">{this.state.film.title}</h3>
        <h3 className="rating">{this.state.film.rating}</h3>

        <div className="detailsContainer">
          <img className="filmDetailsImage" src={this.state.film.image} alt={this.state.film.altMessage}></img>
          <p className="filmSynopsys">{this.state.film.synopsys}</p>
        </div>

        <div className="linkContainer">
          <Link to="./" className="link">◀︎ Go Back</Link>
        </div>

      </div>
    );
  }
}
