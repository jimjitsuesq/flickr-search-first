import React from 'react';
import { Route, NavLink } from 'react-router-dom';

const Nav = ({data, onNavClick}) => {   
    
    let handleClick = (e) => {
        data = e.target.id
        onNavClick(data)
    }
     
    return(
        <nav className="main-nav">
            <ul>
                {/* <li><NavLink to="search/JiuJitsu">Jiu Jitsu</NavLink></li>
                <li><NavLink to="search/wrestling">Wrestling</NavLink></li>
                <li><NavLink to="search/MixedMartialArts">Mixed Martial Arts</NavLink></li> */}
                <li><NavLink to="/search/JiuJitsu" id="/search/JiuJitsu" onClick={(e) => handleClick(e)}>Jiu Jitsu</NavLink></li>
                <li><NavLink to="/search/wrestling" id="/search/Wrestling" onClick={(e) => handleClick(e)}>Wrestling</NavLink></li>
                <li><NavLink to="/search/MixedMartialArts" id="/search/MixedMartialArts" onClick={(e) => handleClick(e)}>Mixed Martial Arts</NavLink></li>
                {/* <li><NavLink to="/">Home</NavLink></li> */}
            </ul>
        </nav>
    )
}

export default Nav;