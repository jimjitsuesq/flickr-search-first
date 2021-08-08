import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = ({searchText, onNavClick}) => {
    function handleClick (e) {
        searchText = e.target.id
        onNavClick(searchText)
    }

    return(
        <nav className="main-nav">
            <ul>
                <li>
                    <NavLink    exact to="/"
                    >
                    Home
                    </NavLink>
                </li>
                <li>
                    <NavLink    to="/search/Jiu Jitsu" 
                                id="Jiu Jitsu" 
                                onClick={(e) => handleClick(e)}
                    >
                    Jiu Jitsu
                    </NavLink>
                </li>
                <li>
                    <NavLink    to="/search/Olympic Wrestling" 
                                id="Olympic Wrestling" 
                                onClick={(e) => handleClick(e)}
                    >
                    Olympic Wrestling
                    </NavLink>
                </li>
                <li>
                    <NavLink    to="/search/Grappling" 
                                id="Grappling" 
                                onClick={(e) => handleClick(e)}
                    >
                    Grappling
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default Nav;