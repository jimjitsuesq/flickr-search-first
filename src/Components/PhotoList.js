import React from 'react';
import Photo from './Photo';
import NoMatch from './NoMatch';

/**
 * Creates the rendered photo display using the individual Photos rendered by
 * the Photo component, as well as the "loading" display.
 * @param {*} props The various pieces of information returned from Flickr. 
 * @returns an object containing the rendered photo display
 */
const PhotoList = props => {
    console.log(props.loading)
    const results = props.data
    let photos;
    let resultsPrefix = decodeURI(props.queryText)
    if(props.loading) {
        <p>Loading...</p>
    } else {
        if (props.data.length) {
            photos=results.map(photo => <Photo 
                                            displayURL={`https://flickr.com/photos/${photo.owner}`} 
                                            clickURL={`https://live.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}_z.jpg`} 
                                            key={`${photo.id}`}

                                        />);
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
                <h3>Search Results for "<span className="italicized">{resultsPrefix}</span>"</h3>
                    <ul>
                        {photos}
                    </ul>
                </div>
            }
        </div>
    )
}
export default PhotoList;