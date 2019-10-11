import React from 'react';

function Nav() {
    return (
        <ul className="nav">
            <li className="nav-item">
                <h3>React Google Book Search</h3>
            </li>
            <li class="nav-item">
                <a className="nav-link active" href="#">Active</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#">Link</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#">Link</a>
            </li>
            <li className="nav-item">
                <a className="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
            </li>
        </ul>
    );
}

export default Nav;