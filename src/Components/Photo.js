import React from 'react';

const Photo = (props) => (
    <li>
        <a href={props.displayURL} target="_blank" rel="noreferrer"><img src={props.clickURL} alt=""/></a>
    </li>
);

export default Photo;