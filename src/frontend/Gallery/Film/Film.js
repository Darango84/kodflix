import React from 'react';
import './Film.css';
import { Link } from 'react-router-dom';

//this component defines the structure and properties of our films

export default class Film extends React.Component {

    render() {
      let { id, title, rating, altMessage } = this.props;
      
      return (
      <div className="filmImage">

        <Link to={`/${id}`}>
          <img src={require(`../../common/images/${id}.jpg`)} 
          alt={altMessage} />
        </Link>
  
        <div className="filmTitle">
         <h2>{title}</h2>
         <h3>{rating}</h3>
        </div>

      </div>
      )
    }
 }

 

