import React from 'react';

const Photo = props => (
    <li>
        <a href={props.url1} target="_blank"><img src={props.url2} alt=""/></a>
    </li>
);

export default Photo;