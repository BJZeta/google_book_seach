import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {
    return (
        <ul className="nav">
            <li className="nav-item">
                <h3>React Google Book Search</h3>
            </li>
            <li class="nav-item">
                <Link className="nav-link" to='/' role='button'>Search</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to='/saved' role='button'>Saved</Link>
            </li>
        </ul>
    );
}

export default Nav;