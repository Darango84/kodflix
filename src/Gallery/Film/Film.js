import React from 'react';
import './Film.css';
import { Link } from 'react-router-dom';

//this component defines the structure and properties of our films

export default function Film(props){
    return (
      <div className="filmImage">
        <Link to={"/" + props.id}><img src={props.image} alt={props.altMessage}></img></Link>
  
        <div className="filmTitle">
         <h2>{props.title}</h2>
         <h3>{props.rating}</h3>
        </div>
      </div>
    );
 }




