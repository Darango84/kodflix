import React from 'react';
import './FilmDetails';
import { Link } from 'react-router-dom';

export default function FilmDetails() {
    return <div>
        <h1>Hello, this will be the details page for each Movie & TV show :)</h1>
        <Link to='./'>Back to Homepage</Link>
        </div>;
}
