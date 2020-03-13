import React from 'react';
import './FilmDetails.css';
import getFilmData from '../GalleryData/GalleryData';
import { Link } from 'react-router-dom';

//This component creates a page where the Film details will be displayed,
//but at present it renders a message that then changes to 'Coming Soon' after 1sec

export default class FilmDetailsMessage extends React.Component {
   constructor() {
      super();
      this.state = {
         film: {}
      };
    }

      componentDidMount() {
          let filmId = this.props.match.params.filmId;
          let film = getFilmData()
            .find((film) => film.id === filmId);
            
            this.setState({
                film: film 
            });
        }
   

   render() {
      return (
         <div>
            <h3 className="detailsTitle">{this.state.film.title}</h3>
            <Link to='./' className="link">Back to Homepage</Link>
         </div>
      );
   }
}