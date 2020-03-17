import React from 'react';
import './Menu.css';
import { Link } from 'react-router-dom';

export default function Menu() {
    return (
        <div className="fixedMenu">
            <ul className="menu">
                <Link to='./' className="appHeader"><li>Kodflix</li></Link>
                <li className="menuItem">Films</li>
                <li className="menuItem">Series</li>
                <li className="menuItem">Latest</li>
                <li className="menuItem">My List</li>
          </ul>
        </div>
    )
}

