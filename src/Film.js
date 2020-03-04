import React from 'react';



export default function Film(props){
    return (
      <div className="filmImage">
        <img src={props.image} alt={props.altMessage}/>
        <div className="filmTitle">
         <h2>{props.title}</h2>
         <h3>{props.rating}</h3>
        </div>
      </div>
    );
 }

 