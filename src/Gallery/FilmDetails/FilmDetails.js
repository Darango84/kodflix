import React from 'react';
import './FilmDetails.css';
import { Link } from 'react-router-dom';


export default class FilmDetailsMessage extends React.Component {
   constructor() {
      super();
      this.state = {
         message: "Details page for each Film and Series..."
      };
    }

      componentDidMount() {
          setTimeout(() => {
              this.setState({message: "Coming soon..."
          });
        }, 1000);
      }
   

   render() {
      return (
         <div>
            <h3 className="detailsTitle">{this.state.message}</h3>
            <Link to='./' className="link">Back to Homepage</Link>
         </div>
      );
   }
}