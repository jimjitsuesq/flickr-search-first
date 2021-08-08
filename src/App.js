import React, { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import axios from 'axios';

import apiKey from './config.js'
import './App.css';
import './css/index.css';
import PhotoList from './Components/PhotoList';
import Nav from './Components/Nav';
import SearchForm from './Components/SearchForm.js';
import NotFound from './Components/NotFound.js';
import Home from './Components/Home.js';

function App() {
    const [images, setImages] = useState([]);
    const [loading, setLoading] = useState(true);
    const [queryText, setQueryText] = useState('');

    /**
     * Used to update the state variables after navigation in the app.
     * @param {string} str Used to pass the search string from the Nav and
     * SearchForm components
     */
    function updateState (str) {
        if(str !== queryText) {
        setLoading(true)
        setQueryText(str)
        }
    }

    /**
     * Used to retrieve photos from Flickr whenever the component is rendered.
     */
    useEffect(() =>{
        async function getPhotos () {
            try {
                if(window.location.pathname !== '/'  && queryText !== '') {
                const response = await axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${queryText}&per_page=24&sort=interestingness-asc&format=json&nojsoncallback=1`)
                setImages(response.data.photos.photo)
                setLoading(false)
                }
            } catch (error) {
                console.log('Error fetching and parsing data', error);
            }
        }       
    getPhotos()
    },[queryText])

    /**
     * Renders the list of photos
     * @returns The PhotoList component
     */
    const displayPhotos = () => {
        return(
            <PhotoList 
                loading={loading} 
                queryText={queryText} 
                data={images}
            /> 
        )
    }

    /**
     * Helper function used to trigger a state update when the user navigates 
     * in specific ways.
     */
    const updateOnChange = () => {
        if(window.location.pathname !== '/') {
            updateState((window.location.pathname).slice(8))
        } 
    }
    
    /**
     * Triggers the getPhotos function when the user reloads the page or uses 
     * the back or forward buttons in the browser by calling the updateOnChange
     * helper function.
     */
    useEffect(() => {
        window.onpopstate = () => {
            updateOnChange()
        }
        window.onload = () => {
            updateOnChange()
        }
    })
 
    return (
        <div className="container">
            <SearchForm onSearch={updateState} />
            <Nav onNavClick={updateState} />
            <div className="photo-container">
                <Switch>
                    <Route  exact path="/" 
                            component={Home}
                    />
                    <Route  path="/search/"
                            component={displayPhotos}
                    />
                    <Route>
                        <NotFound />
                    </Route>
                </Switch>
           </div>
        </div>
    );
}
export default App;
