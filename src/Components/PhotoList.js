import React from 'react';
import Photo from './Photo';
import NoMatch from './NoMatch';

/**
 * Creates the rendered photo display, as well as the "loading" display that 
 * is part of that display.
 * @param {string} props 
 * @returns an object containing the rendered photo display
 */
const PhotoList = props => {
    const results = props.data
    let photos;
    if(props.loading) {
        <p>Loading...</p>
    } else {
        if (props.data.length) {
            photos = results.map(photo => <Photo displayURL={`https://flickr.com/photos/${photo.owner}`} clickURL={`https://live.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}_z.jpg`} key={`${photo.id}`}/>);
        } else {
            photos = <NoMatch />
        }
    }
    return(
        <div>
           {(props.loading)
                ?  <p>Loading...</p>
                :
                <div>
                <h2>Search Results for "{(props.query)}"</h2>
                    <ul>
                        {photos}
                    </ul>
                </div>
            }
        </div>
    )
}
export default PhotoList;