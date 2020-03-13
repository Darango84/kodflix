import React from 'react';
import './Gallery.css';
import Film from './Film/Film';
import  getFilmData from './GalleryData/GalleryData';


export default function gallery() {
  return (
    <div className="filmContainer">
        {
        getFilmData().map(film => (
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

