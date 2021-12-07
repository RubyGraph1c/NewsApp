import React from 'react';
import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <header>

            <ul>
                <li className="navLink">
                    <Link to="/articles">All Articles</Link>
                </li>
                <li className="navLink">
                    <Link to="/articles/new">Add Article</Link>
                </li>
                <li className="navLink">
                    <Link to="/journalists">All Journalists</Link>
                </li>
                <li className="navLink">
                    <Link to="/journalists/new">Add Journalist</Link>
                </li>

            </ul>
        </header>
    )
}

export default NavBar;