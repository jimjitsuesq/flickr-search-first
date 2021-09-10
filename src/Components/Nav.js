import React from "react";
import { NavLink } from "react-router-dom";

/**
 * Component that renders the navigation bar and sends click information back
 * to App.js for processing
 * @param {string} searchText The string passed back to App.js containing the
 * search string to be sent to Flickr
 * @param {function} onNavClick The handler used when a user clicks
 * @returns the searchText
 */
const Nav = ({ searchText, onNavClick }) => {
  function handleClick(e) {
    searchText = e.target.id;
    onNavClick(searchText);
  }

  return (
    <nav className="main-nav">
      <ul>
        <li>
          <NavLink exact to="/">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/search/Jiu Jitsu"
            id="Jiu Jitsu"
            onClick={(e) => handleClick(e)}
          >
            Jiu Jitsu
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/search/Olympic Wrestling"
            id="Olympic Wrestling"
            onClick={(e) => handleClick(e)}
          >
            Olympic Wrestling
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/search/Grappling"
            id="Grappling"
            onClick={(e) => handleClick(e)}
          >
            Grappling
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
