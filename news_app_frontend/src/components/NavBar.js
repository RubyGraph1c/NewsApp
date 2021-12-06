import React from 'react';
import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <header>

            <ul>
                <li className="navLink">
                    <Link to="/articles">Articles</Link>
                </li>

            </ul>
        </header>
    )
}

export default NavBar;