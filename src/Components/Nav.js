import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = ({data, onNavClick}) => {   
    
    let handleClick = (e) => {
        data = e.target.id
        onNavClick(data)
    }

    return(
        <nav className="main-nav">
            <ul>
                <li><NavLink to="/search/JiuJitsu" id="/search/Jiu Jitsu" onClick={(e) => handleClick(e)}>Jiu Jitsu</NavLink></li>
                <li><NavLink to="/search/Olympic Wrestling" id="/search/Olympic Wrestling" onClick={(e) => handleClick(e)}>Olympic Wrestling</NavLink></li>
                <li><NavLink to="/search/Grappling" id="/search/Grappling" onClick={(e) => handleClick(e)}>Grappling</NavLink></li>
            </ul>
        </nav>
    )
}

export default Nav;