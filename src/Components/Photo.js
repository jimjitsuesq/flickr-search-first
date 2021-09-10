import React from "react";

/**
 * Renders the individual photos returned from Flickr
 * @param {*} props Contains the URLs in the individual photo
 * @returns a Photo object
 */
const Photo = (props) => (
  <li>
    <a  href={props.displayURL} 
        target="_blank" 
        rel="noreferrer">
      <img  src={props.clickURL} 
            alt=""
      />
    </a>
  </li>
);

export default Photo;
